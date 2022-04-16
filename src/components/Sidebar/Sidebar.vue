<template>
  <div class="sidebar" :style="{ width: sidebarWidth }">
    <h1 class="title">
      <span v-if="collapsed">
        <div>R</div>
      </span>
      <span v-else>Rumble</span>
    </h1>

    <SidebarLink to="/" icon="fas fa-home">Home</SidebarLink>

    <SidebarLink to="/About" icon="fas fa-image" v-if="user">About</SidebarLink>
    <SidebarLink to="/Preferences" icon="fas fa-list-alt" v-if="user"
      >Preferences</SidebarLink
    >
    <SidebarLink to="/EateryList" icon="fas fa-cutlery" v-if="user"
      >Eatery List</SidebarLink
    >
    <SidebarLink to="/SignIn" icon="fas fa-user-alt" v-if="!user"
      >Sign In
    </SidebarLink>

    <SidebarLink to="/SignIn" icon="fas fa-user-alt" v-if="user"
      >Welcome {{user.username}}
    </SidebarLink>

    <SidebarLink to="/" icon="fas fa-user-alt" v-if="user"
      >Log Out
    </SidebarLink>

    <span
      class="collapse__icon"
      :class="{ rotate__180: collapsed }"
      @click="toggleSidebar"
    >
      <i class="fas fa-angle-double-left" />
    </span>
  </div>
</template>

<script>
import SidebarLink from "./SidebarLink.vue";
import { collapsed, toggleSidebar, sidebarWidth } from "./state.ts";
import { mapGetters } from "vuex";

export default {
  props: {},
  components: { SidebarLink },
  setup() {
    return { collapsed, toggleSidebar, sidebarWidth };
  },
  methods: {
    async logout() {
      await this.$store.dispatch("auth/logout");
      this.$router.push("/");
    },
    computed: {
      ...mapGetters({
        user: "auth/user",
      }),
    },
  },
};
</script>

<style>
:root {
  --sidebar-bg-color: rgb(11, 11, 11);
  --sidebar-item-hover: rgba(198, 198, 198, 0.733);
  --sidebar-item-active: rgba(198, 198, 198, 0.733);
}
</style>

<style scoped>
.title {
  text-align: center;
  padding: 0.2em;
}

.sidebar {
  color: white;
  background-image: linear-gradient(
    90deg,
    var(--sidebar-bg-color),
    rgb(163, 163, 163)
  );

  float: left;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  bottom: 0;
  padding: 0.5em;

  transition: 0.3s ease;

  display: flex;
  flex-direction: column;
}

.sidebar h1 {
  height: 2.5em;
}

.collapse__icon {
  position: absolute;
  bottom: 0;
  padding: 0.75em;

  transition: 0.2s linear;
  color: rgba(255, 255, 255, 0.7);
}

.collapse__icon:hover {
  cursor: pointer;
}

.rotate__180 {
  transform: rotate(180deg);
  transition: 0.2s linear;
}
</style>
