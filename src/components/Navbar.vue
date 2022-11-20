<template>
  <div class="navbar py-1 bg-alternate w-full flex justify-end">
    <div
      id="avatarButton"
      type="button"
      data-dropdown-toggle="userDropdown"
      data-dropdown-placement="bottom-start"
      class="inline-flex cursor-pointer overflow-hidden relative mr-5 justify-center items-center w-10 h-10 bg-gray-100 rounded-full dark:bg-gray-600"
    >
      <span class="font-medium text-gray-600 dark:text-gray-300">JL</span>
    </div>

    <!-- Dropdown menu -->
    <div
      id="userDropdown"
      class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
    >
      <div class="py-3 px-4 text-sm text-gray-900 dark:text-white">
        <div>Bonnie Green</div>
        <div class="font-medium truncate">name@flowbite.com</div>
      </div>
      <div class="py-1">
        <a
          href="#"
          class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
          >Sign out</a
        >
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style></style>
