<template>
  <div class="flex justify-center">
    <form class="flex flex-col gap-6">
      <div>
        <label class="label">
          <span class="label-text text-warning">Username</span>
        </label>
        <input
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
        <button class="btn btn-outline btn-primary w-full">Save</button>
      </div>
    </form>
  </div>
</template>
