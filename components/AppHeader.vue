<template lang="pug">
.container.mx-auto
  .navbar.bg-base-100
      .flex-1.font-bold
        .bg-green-200.rounded-full.px-3.pb-1.text-2xl.font-extrabold.text-green-800 =
        NuxtLink.ml-2.font-bold.text-blue-800.normal-case.text-xl(to="/") SourceWork
      .flex-none
        NuxtLink.btn.btn-ghost.normal-case(to="/contactus") Contact Us

</template>