<template>
  <header class="mx-auto border-b border-gray-100 py-2 container grid grid-cols-4 gap-4">
    <div class="col-start-1 col-end-3 flex justify-start items-center space-x-4">
      <img class="w-16" src="/assets/images/logo.png" alt="Board">
      <div class="crayons-field flex-1 relative">
        <input class="rounded-md border border-gray-500\/50 w-full p-2" type="text" id="" name="q" placeholder="Search..." autocomplete="off" aria-label="Search term">
        <button type="submit" aria-label="Search" class="absolute inset-px left-auto mt-0 p-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" class="crayons-icon c-btn__icon" focusable="false">
            <path d="m18.031 16.617 4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z"></path>
          </svg>
        </button>
      </div>
    </div>
    <div class="col-end-7 col-span-2 flex justify-start items-center">
      <NuxtLink to="/my-page" class="rounded-md border text-indigo-400 border-indigo-400 block px-4 py-2">アカウント</NuxtLink>
    </div>
  </header>
  <main class="mx-auto bg-slate-50 p-4">
    <slot />
  </main>
  <footer class="mx-auto bg-gray-50 py-5 text-center">
  </footer>
</template>
