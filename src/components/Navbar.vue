<script>
export default {
  name: "Navbar",
};
</script>

<template>
  <div class="p-5 pt-7 fixed w-[99%] z-50">
    <div class="navbar  bg-white rounded-full px-10">
      <div class="flex-1">
        <a class="btn btn-ghost normal-case text-xl">WEBSITE</a>
      </div>
      <div class="flex-none hidden md:block">
        <ul class="menu menu-horizontal px-1">
          <li>
            <RouterLink to="/" class="link-navbar" activeClass="link-navbar-active">Home</RouterLink>
          </li>
          <li>
            <RouterLink to="/new-movie" class="link-navbar" activeClass="link-navbar-active">New Movie</RouterLink>
          </li>
          <li>
            <RouterLink to="/coming-soon" class="link-navbar" activeClass="link-navbar-active">Coming Soon</RouterLink>
          </li>
        </ul>
        <RouterLink to="/" class="btn btn-primary link-navbar-button">Discover</RouterLink>
      </div>
      <div class="flex-none block md:hidden">
        <label class="btn btn-ghost " for="my-drawer">
          <box-icon name='menu-alt-right' size="36"></box-icon>
        </label>
    </div>
  </div>
</div></template>
