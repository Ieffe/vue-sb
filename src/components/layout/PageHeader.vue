<template>
    <header>
        <nav>
            <h1 class="web-name"><router-link to="/">Find a Coach</router-link></h1>
            <ul>
                <li><router-link to="/coaches">All Coaches</router-link></li>
                <li><router-link to="/requests">My Requests</router-link></li>
            </ul>
        </nav>
    </header>
</template>

<style lang="postcss" scoped>
.web-name{
  @apply px-4 align-middle text-white font-extrabold inline-block
}

li a, li a.router-link-active {
  @apply align-middle border border-white text-white inline-block justify-center justify-items-center p-4 
}

li a:active, li a:hover, li a.router-link-active{
  @apply border-none text-red-700 bg-white
}

header {
  @apply w-full bg-red-700 py-3 justify-center
}

h1 {
  @apply my-auto
}

ul {
  @apply flex p-4 list-none m-0
}

nav {
  @apply flex justify-between
}

header li{
  @apply  m-2 
}
</style>