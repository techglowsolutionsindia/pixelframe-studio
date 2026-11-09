/* ==================================================
   PIXELFRAME STUDIO BOOKING FORM STARTED
================================================== */

"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbzzcsRjejSs1RQxV5LIsuqnHxymoMC95TUZdhHYC2PnDSMdlqarD-N6W86LknsJCPbHpA/exec";

  const form = document.getElementById("booking-form");
  if (!form) return;

  const phone = document.getElementById("booking-phone");
  const date = document.getElementById("booking-date");
  const status = document.getElementById("booking-form-status");
  const submitButton = form.querySelector('button[type="submit"]');

  if (!phone || !status || !submitButton) return;

  const buttonContent = submitButton.innerHTML;
  let submitting = false;

  // Status Message Started
  function showStatus(message, type = "") {
    status.textContent = message;
    status.classList.remove("success", "error", "loading");

    if (type) status.classList.add(type);

    status.style.color =
      type === "success" ? "#167a3e" : type === "error" ? "#b42318" : "#000000";

    status.style.fontWeight = type === "success" ? "700" : "400";
  }
  // Status Message Ended

  // Phone Validation Started
  function validatePhone(value) {
    const number = value.trim();

    const match = number.match(/^(\+[1-9]\d{0,2}) ([0-9]+)$/);

    if (!match) {
      return "Enter a valid phone number with country code, for example +91 9876543210.";
    }

    const countryCode = match[1];
    const digits = match[2];

    if (countryCode === "+91") {
      if (!/^[6-9]\d{9}$/.test(digits)) {
        return "Enter a valid 10-digit Indian mobile number after +91.";
      }
    } else {
      if (digits.length < 4 || digits.length > 14) {
        return "Enter a valid international phone number.";
      }

      if (countryCode.length - 1 + digits.length > 15) {
        return "International phone numbers cannot exceed 15 digits.";
      }
    }

    return "";
  }

  phone.value = "+91 ";

  phone.addEventListener("focus", () => {
    if (!phone.value.trim()) {
      phone.value = "+91 ";
    }

    if (phone.value === "+91 ") {
      requestAnimationFrame(() => {
        phone.setSelectionRange(4, 4);
      });
    }
  });

  phone.addEventListener("blur", () => {
    if (!phone.value.trim()) {
      phone.value = "+91 ";
    }
  });

  phone.addEventListener("input", () => {
    phone.setCustomValidity("");
  });
  // Phone Validation Ended

  // Preferred Date Started
  if (date) {
    const now = new Date();
    const localDate = new Date(now.getTime() - now.getTimezoneOffset() * 60000)
      .toISOString()
      .slice(0, 10);

    date.min = localDate;
  }
  // Preferred Date Ended

  // Form Submission Started
  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    if (submitting) return;

    phone.setCustomValidity("");

    const phoneError = validatePhone(phone.value);

    if (phoneError) {
      phone.setCustomValidity(phoneError);
      phone.reportValidity();
      showStatus(phoneError, "error");
      return;
    }

    if (!form.reportValidity()) return;

    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") || "").trim(),
      email: String(formData.get("email") || "").trim(),
      phone: String(formData.get("phone") || "").trim(),
      service: String(formData.get("service") || "").trim(),
      preferred_date: String(formData.get("preferred_date") || "").trim(),
      package: String(formData.get("package") || "").trim(),
      message: String(formData.get("message") || "").trim(),
    };

    submitting = true;
    submitButton.disabled = true;
    submitButton.setAttribute("aria-busy", "true");
    submitButton.textContent = "Submitting...";
    showStatus("Submitting your enquiry, please wait...", "loading");

    try {
      // Generate a unique enquiry request ID
      const requestId = crypto.randomUUID();
      payload.requestId = requestId;

      // Check Google Sheets confirmation
      function verifySavedEnquiry() {
        return new Promise((resolve, reject) => {
          const callbackName =
            "bookingCallback_" + requestId.replace(/-/g, "_");

          const script = document.createElement("script");
          const timeout = setTimeout(() => {
            cleanup();
            reject(new Error("Confirmation timed out."));
          }, 15000);

          function cleanup() {
            clearTimeout(timeout);
            delete window[callbackName];
            script.remove();
          }

          window[callbackName] = (result) => {
            cleanup();
            resolve(result && result.saved === true);
          };

          script.onerror = () => {
            cleanup();
            reject(new Error("Confirmation request failed."));
          };

          const url = new URL(SCRIPT_URL);
          url.searchParams.set("callback", callbackName);
          url.searchParams.set("requestId", requestId);

          script.src = url.toString();
          document.head.appendChild(script);
        });
      }
      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        body: new URLSearchParams(payload),
      });

      let saved = false;

      for (let attempt = 0; attempt < 6; attempt++) {
        saved = await verifySavedEnquiry();

        if (saved) break;

        await new Promise((resolve) => setTimeout(resolve, 1500));
      }

      if (!saved) {
        throw new Error("Enquiry storage could not be confirmed.");
      }

      showStatus("Your enquiry has been submitted successfully.", "success");

      // Clear form after confirmed submission
      form.reset();
      phone.value = "+91 ";

      // Hide success message after 5 seconds
      setTimeout(() => {
        if (
          status.textContent === "Your enquiry has been submitted successfully."
        ) {
          status.textContent = "";
          status.classList.remove("success");
          status.style.fontWeight = "400";
        }
      }, 5000);
    } catch (error) {
      console.error("Booking enquiry request failed:", error);

      showStatus(
        "Unable to send your enquiry. Please check your connection and try again.",
        "error",
      );
    } finally {
      submitting = false;
      submitButton.disabled = false;
      submitButton.removeAttribute("aria-busy");
      submitButton.innerHTML = buttonContent;
    }
  });
  // Form Submission Ended
});

/* ==================================================
   PIXELFRAME STUDIO BOOKING FORM ENDED
================================================== */
