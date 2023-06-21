<template>
  <div class="flex justify-center">
    <form class="flex flex-col gap-6">
      <div>
        <label class="label">
          <span class="label-text text-warning">Username</span>
        </label>
        <input
          v-model="findCurrentUser[0].name"
          type="text"
          placeholder="Example"
          class="input input-bordered input-primary w-72 max-w-xs"
        />
      </div>
      <div>
        <label class="label">
          <span class="label-text text-warning">job</span>
        </label>
        <input
          v-model="findCurrentUser[0].job"
          type="text"
          placeholder="Example"
          class="input input-bordered input-primary w-72 max-w-xs"
        />
      </div>
      <div class="form-control">
        <label class="label">
          <span class="label-text text-warning">Enter wage</span>
        </label>
        <label class="input-group">
          <input
            v-model="findCurrentUser[0].wage"
            type="number"
            placeholder="0.00"
            class="input input-bordered w-full input-primary"
          />
          <span class="bg-primary-focus">$</span>
        </label>
      </div>
      <div class="mt-6">
        <label class="label">
          <span class="label-text text-warning"
            ><i class="bi bi-chevron-bar-up text-md"></i
          ></span>
        </label>
        <router-link to="/">
          <button
            @click="updateUserHandler()"
            class="btn btn-outline btn-primary w-full"
          >
            Update
          </button>
        </router-link>
      </div>
      <div class="mt-6 flex justify-end">
        <router-link to="/">
          <button class="btn btn-outline btn-primary w-full">
            <i class="bi bi-x text-md flex"></i>Undo
          </button>
        </router-link>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      user: {
        name: "",
        job: "",
        wage: 0,
      },
    };
  },
  computed: {
    ...mapGetters("crud", ["getUsers"]),

    findCurrentUser() {
      return this.getUsers.filter(user => user.id == this.$route.params.id);
    },
  },
  methods: {
    ...mapActions("crud", ["updateUser"]),

    updateUserHandler() {
      this.updateUser(this.user);
    },
  },

  mounted() {},
};
</script>
