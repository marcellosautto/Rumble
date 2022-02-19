<script>
import SidebarLink from './SidebarLink.vue'
import { collapsed, toggleSidebar, sidebarWidth } from "./state.ts";

export default {
  props: {},
  components: {SidebarLink},
  setup() {
    return { collapsed, toggleSidebar, sidebarWidth };
  },
};
</script>

<template>
  <div>
    <div class="sidebar" :style="{ width: sidebarWidth }">

        <h1>
            <span v-if="collapsed">
                <div>R</div>
            </span>
            <span v-else>Rumble</span>
        </h1>

    <SidebarLink to="/" icon="fas fa-home">Home</SidebarLink>

      <span
        class="collapse__icon"
        :class="{ 'rotate__180': collapsed }"
        @click="toggleSidebar"
      >
        <i class="fas fa-angle-double-left" />
      </span>
    </div>
  </div>
</template>

<style>
:root {
  --sidebar-bg-color: rgb(8, 105, 117);
  --sidebar-item-hoder: red;
  --sidebar-item-active: blue;
}
</style>

<style scoped>
.sidebar {
  color: white;
  background-color: var(--sidebar-bg-color);

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

.collapse__icon {
  position: absolute;
  bottom: 0;
  padding: 0.75em;

  transition: 0.2s linear;
  color: rgba(255, 255, 255, 0.7);
}

.collapse__icon:hover{
    cursor: pointer;
}

.rotate__180{
    transform: rotate(180deg);
    transition: 0.2s linear;
}
</style>
