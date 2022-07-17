<template>
  <div class="flex place-content-center items-center">
<!--    <div class="shadow-md max-w-3xl w-full space-y-2 py-4">-->
    <div class="max-w-3xl w-full">
      <ul>
        <li class="bg-white p-4 space-y-4">
          <div class="grid grid-cols-content-lists justify-center items-center space-y-2">
            <img class="w-16" src="/images/drink_tapioka_tea_schoolboy.png" alt="user">
            <div class="col-span-1">
              <p>user.name</p>
              <time>content.time</time>
            </div>
            <div class="col-start-2 col-span-1 space-y-2">
              <h2 class="text-2xl">
                Ethan's Weekly Software Engineering Journal (Week of 7/10/22 - 7/16/22)
              </h2>
              <div class="flex items-center justify-between">
                <div class="flex">
                  <NuxtLink to="/sign-up" class="block flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img" aria-labelledby="a72mjq4exq73uksc6povhjcyubq6bele" class="crayons-icon"><title id="a72mjq4exq73uksc6povhjcyubq6bele">Reactions</title><path d="M18.884 12.595l.01.011L12 19.5l-6.894-6.894.01-.01A4.875 4.875 0 0112 5.73a4.875 4.875 0 016.884 6.865zM6.431 7.037a3.375 3.375 0 000 4.773L12 17.38l5.569-5.569a3.375 3.375 0 10-4.773-4.773L9.613 10.22l-1.06-1.062 2.371-2.372a3.375 3.375 0 00-4.492.25v.001z"></path></svg>
                    5<span>&nbsp;reactions</span>
                  </NuxtLink>
                  <NuxtLink to="/sign-up" class="block flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img" aria-labelledby="argrxgwvsc7fnzorwsv57kpt8vx1q701" class="crayons-icon"><title id="argrxgwvsc7fnzorwsv57kpt8vx1q701">Comments</title><path d="M10.5 5h3a6 6 0 110 12v2.625c-3.75-1.5-9-3.75-9-8.625a6 6 0 016-6zM12 15.5h1.5a4.501 4.501 0 001.722-8.657A4.5 4.5 0 0013.5 6.5h-3A4.5 4.5 0 006 11c0 2.707 1.846 4.475 6 6.36V15.5z"></path></svg>
                    <span>Add&nbsp;Comment</span>
                  </NuxtLink>
                </div>
                <button class="col-span-1 bg-gray-200 w-30 p-2">お気に入り</button>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<style>
.test {
  display: grid;
  grid-template-columns: 300px 320px 1fr;
}
</style>