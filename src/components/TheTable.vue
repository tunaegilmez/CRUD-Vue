<template>
  <div>
    <div class="flex justify-end">
      <router-link to="new">
        <button
          class="btn btn-sm btn-square btn-outline text-primary hover:bg-primary-focus"
        >
          <i class="bi bi-plus text-3xl flex"></i>
          <p>New</p>
        </button>
      </router-link>
    </div>
    <div v-if="getUsers.length" class="overflow-x-auto mt-6">
      <table class="table">
        <!-- head -->
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Job</th>
            <th>Wage</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <!-- row 1 -->
          <tr
            v-for="user in getUsers"
            :key="user.id"
            class="hover:bg-secondary"
          >
            <th>{{ user.id }}</th>
            <td>{{ user.name }}</td>
            <td>{{ user.job }}</td>
            <td>{{ user.wage }}</td>
            <td class="flex justify-between">
              <div
                @click="goUpdatePage(user.id)"
                class="cursor-pointer hover:bg-primary p-1 rounded-full hover:text-neutral"
              >
                <i class="bi bi-pen text-lg"></i>
              </div>
              <div
                @click="deleteHandleUser(user.id)"
                class="cursor-pointer hover:bg-primary p-1 rounded-full hover:text-neutral"
              >
                <i class="bi bi-trash3 text-lg"></i>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-else>
      <h1 class="text-3xl">There Are No Users</h1>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters("crud", ["getUsers"]),
  },
  methods: {
    ...mapActions("crud", ["deleteUser"]),

    deleteHandleUser(id) {
      this.deleteUser(id);
    },

    goUpdatePage(id) {
      this.$router.push(`/update/${id}`);
    },
  },
};
</script>
