<template lang="pug">
.container.mx-auto.mt-10
  .grid.grid-cols-1(class="md:grid-cols-3")
    .bg-base-200.rounded-lg.p-10
        .text-3xl.mb-5.font-extrabold.text-transparent.bg-clip-text.bg-gradient-to-r.from-purple-400.to-pink-600.font-bold Simple and easy
        ul.steps.steps-vertical
          li.step Post hiring ad
          li.step Interview candidates
          li.step Choose package & benefits
          li.step Send offer letter
          li.step Done
    .p-10.col-span-2
      .grid.gap-5
        div No Need to register a company in India.
        div We collect paycheck and pay developer in india.
        div We process bonus and even send gift hampers, welcome packages.
        div We take care of assets like laptops.
        div We protect you're intellectual property physically and legally.
        div At this point we are only server USA. More countries are coming soon...
        div
          |You need more. Absolutely we can take care of it.
          NuxtLink.link.normal-case(to="/contact-us") Contact us


</template>
