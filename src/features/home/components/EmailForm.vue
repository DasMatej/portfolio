<template>
  <div class="contact-form">
    <div class="flex-fill">
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
      <!-- Always rendered but space is reserved -->
      <div class="error-message" :class="{ visible: emailError }">
        Invalid email address
      </div>
    </div>

    <div>
      <div class="form-label">Message</div>
      <textarea v-model="message" class="form-control mt-input"></textarea>
    </div>

    <div>
      <button
        class="mt-btn mt-3 send-button"
        @click="sendEmail"
        :disabled="isSending"
      >
        <div v-if="!isSending">
          <div class="alt-send-button">
            <Icon icon="fa:send" class="img-fluid mb-1 me-2" />
            <span class="send-text">SEND</span>
          </div>
        </div>
        <div v-else class="loader"></div>
      </button>
    </div>
  </div>
</template>

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
  if (isSending.value) return;

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

<style scoped>
.form-control {
  position: relative;
  z-index: 1;
  color: #e0ffff;
  border: 2px solid #ff4d4d55;
  border-radius: 10px;
  transition: all 0.3s ease;
  background-color: rgb(49, 49, 49);
}

.form-control:focus {
  outline: none;
  border-color: #00ffff2a;
  box-shadow: 0 0 10px #00ffff31;
  background-color: #061010;
}

.form-label {
  font-weight: bold;
  margin-bottom: 0.3rem;
}

.mt-btn {
  position: relative;
  z-index: 1;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #ff4d4d, #ff1a1a),
    radial-gradient(
      circle at 70% 20%,
      rgba(0, 201, 167, 0.25),
      rgba(132, 94, 194, 0.25),
      transparent 60%
    );
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
  border: 3px solid #e0ffff;
  border-top: 3px solid #008b8b;
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

/* Reserve space for error without pushing layout */
.error-message {
  min-height: 1.2em;
  font-size: 0.9rem;
  color: rgb(220, 53, 69);
  opacity: 0;
  transition: opacity 0.3s ease;
}
.error-message.visible {
  opacity: 1;
}
</style>
