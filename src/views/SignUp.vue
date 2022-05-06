<template>
  <section class="vh-100">
    <div class="container-fluid h-custom">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-md-9 col-lg-6 col-xl-5">
          <img
            src="../assets/images/rumble-icon.png"
            class="img-fluid"
            alt="Sample image"
          />
        </div>
        <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
          <form v-if="!confirmPassword" @submit.prevent="signUp">
            <h2>Sign Up</h2>

            <!-- Username input -->
            <div class="form-outline mb-4" v-if="!confirmPassword">
              <input
                type="username"
                id="username"
                class="form-control form-control-lg"
                placeholder="Enter a valid username"
                v-model="username"
              />
              <label class="form-label" for="username">Username</label>
            </div>

            <!-- Email input -->
            <div class="form-outline mb-4" v-if="!confirmPassword">
              <input
                type="email"
                id="email"
                class="form-control form-control-lg"
                placeholder="Enter your email"
                v-model="email"
              />
              <label class="form-label" for="email">Email</label>
            </div>

            <!-- Password input -->
            <div class="form-outline mb-3" v-if="!confirmPassword">
              <input
                type="password"
                id="password"
                class="form-control form-control-lg"
                placeholder="Enter password"
                v-model="password"
              />
              <label class="form-label" for="password">Password</label>
            </div>

            <!-- Birthday input -->
            <div class="form-outline mb-3" v-if="!confirmPassword">
              <input
                type="date"
                id="birthdate"
                class="form-control form-control-lg"
                placeholder="Enter password"
                v-model="birthdate"
              />
              <label class="form-label" for="birthdate">Birthday</label>
            </div>

            <!-- Phone Number input -->
            <div class="form-outline mb-3" v-if="!confirmPassword">
              <input
                type="tel"
                id="phone_number"
                class="form-control form-control-lg"
                placeholder="Enter Phone Number..."
                v-model="phone_number"
              />
              <label class="form-label" for="phone_number">Phone Number</label>
            </div>

            <!-- <div class="d-flex justify-content-between align-items-center">
              Checkbox
              <div class="form-check mb-0">
                <input
                  class="form-check-input me-2"
                  type="checkbox"
                  value=""
                  id="form2Example3"
                />
                <label class="form-check-label" for="form2Example3">
                  Remember me
                </label>
              </div>
              <a href="#!" class="text-body">Forgot password?</a>
            </div>-->

            <div class="text-center text-lg-start mt-4 pt-2">
              <button
                class="btn btn-dark btn-lg"
                style="padding-left: 2.5rem; padding-right: 2.5rem"
              >
                Register
              </button>
            </div>
          </form>
          <div class="error-text">{{ error.message }}</div>
          <form v-if="confirmPassword">
            <!-- Code input -->
            <div class="form-outline mb-3" v-if="confirmPassword">
              <input
                type="text"
                id="code"
                class="form-control form-control-lg"
                placeholder="Enter confirmation code..."
                v-model="code"
              />
              <label class="form-label" for="code">Confirmation Code</label>
            </div>

            <div class="text-center text-lg-start mt-4 pt-2">
              <button
                class="btn btn-dark btn-lg"
                style="padding-left: 2.5rem; padding-right: 2.5rem"
                @click="confirmSignUp"
              >
                Confirm Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div
      class="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-dark"
    >
      <!-- Copyright -->
      <div class="text-white mb-3 mb-md-0">
        Copyright © 2022. All rights reserved.
      </div>
      <!-- Copyright -->

      <!-- Right -->
      <div>
        <a href="#!" class="text-white me-4">
          <i class="fab fa-facebook-f"></i>
        </a>
        <a href="#!" class="text-white me-4">
          <i class="fab fa-twitter"></i>
        </a>
        <a href="#!" class="text-white me-4">
          <i class="fab fa-google"></i>
        </a>
        <a href="#!" class="text-white">
          <i class="fab fa-linkedin-in"></i>
        </a>
      </div>
      <!-- Right -->
    </div>
  </section>
</template>

<script>
import User from "@/models/User";

export default {
  data: () => ({
    username: "",
    password: "",
    confirmPassword: false,
    email: "",
    birthdate: "",
    phone_number: "",
    error: "",
    code: "",
  }),
  methods: {
    async signUp() {
      if (
        !this.email ||
        !this.password ||
        !this.birthdate ||
        !this.phone_number
      )
        return;
      try {
        await User.dispatch("auth/signUp", {
          username: this.username,
          password: this.password,
          email: this.email,
          birthdate: this.birthdate,
          phone_number: this.phone_number,
        });

        this.confirmPassword = true;
      } catch (error) {
        this.error = error;
      }
    },
    async confirmSignUp() {
      if (!this.username || !this.code) {
        return;
      }
      try {
        await User.dispatch("confirmSignUp", {
          username: this.username,
          code: this.code,
        });

        await User.dispatch("login", {
          username: this.username,
          password: this.password,
        });

        this.$router.push("/");
      } catch (error) {
        console.log(error);
        this.error = error;
      }
    },
  },
};
</script>

<style scoped>
.title {
  text-align: center;
}

.auth__div {
  text-align: right;
}

.divider:after,
.divider:before {
  content: "";
  flex: 1;
  height: 1px;
  background: #111;
}
.h-custom {
  height: calc(100% - 73px);
}
.error-text{
  color: red;
}

@media (max-width: 450px) {
  .h-custom {
    height: 100%;
  }
}
</style>
