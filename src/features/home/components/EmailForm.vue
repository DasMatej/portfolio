<script setup lang="ts">
import { ref } from "vue";
import emailjs from "emailjs-com";

const name = ref("");
const email = ref("");
const message = ref("");
const isSending = ref(false);
const emailError = ref(false);

const isValidEmail = (email: string) => {
  const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,}$/;
  return regex.test(email);
};

const sendEmail = () => {
  if (!isValidEmail(email.value)) {
    emailError.value = true;
    return;
  } else {
    emailError.value = false;
  }
  if (isSending.value) return; // prevent multiple clicks

  isSending.value = true;

  emailjs
    .send(
      "service_90ldjog",
      "template_xmjniv1",
      {
        name: name.value,
        email: email.value,
        message: message.value,
        time: new Date().toLocaleString(),
      },
      "AI5OC-3w_8t4WpDWV"
    )
    .then(() => {
      alert("Message sent!");
      name.value = "";
      email.value = "";
      message.value = "";
    })
    .catch((err) => {
      console.error("Failed:", err);
      alert("Error sending message.");
    })
    .finally(() => {
      isSending.value = false;
    });
};
</script>

<template>
  <div class="contact-form w-50">
    <div class="d-flex">
      <div class="flex-fill me-4">
        <div class="form-label">Name</div>
        <input v-model="name" class="form-control mt-input" />
      </div>
      <div class="flex-fill">
        <div class="form-label">Email</div>
        <input
          v-model="email"
          class="form-control mt-input"
          :class="{ 'error-border': emailError }"
        />
        <div v-if="emailError" class="text-danger">Invalid email address</div>
      </div>
    </div>
    <div>
      <div class="form-label">Message</div>
      <textarea v-model="message" class="form-control mt-input"></textarea>
    </div>
    <div class="">
      <button class="mt-btn mt-3" @click="sendEmail" :disabled="isSending">
        <span v-if="!isSending">Send</span>
        <span v-else class="loader"></span>
      </button>
    </div>
  </div>
</template>
<style scoped>
.form-control {
  position: relative;
  z-index: 1;
  color: #e0ffff; /* light cyan text */
  border: 2px solid #ff4d4d55;
  border-radius: 10px;
  transition: all 0.3s ease;
  background-color: rgb(49, 49, 49);
}

.form-control:focus {
  outline: none;
  border-color: #00ffff2a;
  box-shadow: 0 0 10px #00ffff31;
  background-color: #061010; /* slightly darker on focus */
}
.form-label {
  color: #b2ffff; /* cyan label */
  font-weight: bold;
  margin-bottom: 0.3rem;
}

.mt-btn {
  position: relative;
  z-index: 1;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #00ffff, #008b8b);
  color: #000;
  font-weight: bold;
  border: none;
  border-radius: 12px;
  padding: 0.6rem 1.2rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.mt-btn:hover:enabled {
  background: linear-gradient(135deg, #00ffff, #00f5ff);
  box-shadow: 0 0 15px #00ffff, 0 0 30px #00ffff33;
}

.mt-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

/* Loader inside button */
.loader {
  border: 3px solid #e0ffff; /* light cyan */
  border-top: 3px solid #008b8b; /* darker cyan */
  border-radius: 50%;
  width: 18px;
  height: 18px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

textarea.form-control {
  min-height: 120px;
  resize: vertical;
}

.error-border {
  border: 2px solid rgb(220, 53, 69);
}
</style>
