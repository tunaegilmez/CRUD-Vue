<template>
  <div class="flex justify-center">
    <form class="flex flex-col gap-6">
      <div>
        <label class="label">
          <span class="label-text text-warning">Username</span>
        </label>
        <input
          v-model="name"
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
          v-model="job"
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
            v-model="wage"
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
            ><i class="bi bi-save"></i
          ></span>
        </label>
        <router-link to="/">
          <button
            @click="addUserHandler()"
            class="btn btn-outline btn-primary w-full"
          >
            Save
          </button>
        </router-link>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      name: "",
      job: "",
      wage: 0,
    };
  },

  methods: {
    ...mapActions("crud", ["addUser"]),

    addUserHandler() {
      this.addUser({
        id: Number(Math.random().toFixed(3)),
        name: this.name,
        job: this.job,
        wage: this.wage,
      });
    },
  },
};
</script>
