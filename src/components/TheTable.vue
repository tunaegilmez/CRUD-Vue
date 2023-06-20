<template>
  <div>
    <div class="flex justify-end">
      <button
        class="btn btn-sm btn-square btn-outline text-primary hover:bg-primary-focus"
      >
        <i class="bi bi-plus text-3xl flex"></i>
        <p>New</p>
      </button>
    </div>
    <div class="overflow-x-auto mt-6">
      <table class="table">
        <!-- head -->
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Job</th>
            <th>Favorite Color</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <!-- row 1 -->
          <tr class="hover:bg-secondary">
            <th>1</th>
            <td>Username</td>
            <td>Job</td>
            <td>wage</td>
            <td class="flex justify-between">
              <div
                class="cursor-pointer hover:bg-primary p-1 rounded-full hover:text-neutral"
              >
                <i class="bi bi-pen text-lg"></i>
              </div>
              <div
                class="cursor-pointer hover:bg-primary p-1 rounded-full hover:text-neutral"
              >
                <i class="bi bi-trash3 text-lg"></i>
              </div>
            </td>
          </tr>
          <tr class="hover:bg-secondary">
            <th>2</th>
            <td>Cy Ganderton</td>
            <td>Quality Control Specialist</td>
            <td>Blue</td>
            <td class="flex justify-between">
              <div
                class="cursor-pointer hover:bg-primary p-1 rounded-full hover:text-neutral"
              >
                <i class="bi bi-pen text-lg"></i>
              </div>
              <div
                class="cursor-pointer hover:bg-primary p-1 rounded-full hover:text-neutral"
              >
                <i class="bi bi-trash3 text-lg"></i>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
