<template>
    <nav class="bg-black">
      <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div class="relative flex items-center justify-between h-16">
          <!-- Logo and title -->
          <div class="flex-1 flex items-center justify-start sm:items-stretch sm:justify-start">
            <div class="flex-shrink-0 flex items-center">
              <span class="text-white font-semibold text-xl tracking-tight ml-3">TheMovieCentral</span>
            </div>
            <div class="hidden sm:block sm:ml-6">
              <div class="flex space-x-4">
                <!-- Navigation Links -->
                <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</a>
                <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Discover</a>
                <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Movie Release</a>
                <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Forum</a>
                <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Your Favourite</a>
              </div>
            </div>
          </div>
          <!-- Search and icons -->
          <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div class="mr-3 relative">
              <input type="search" class="bg-gray-800 text-white rounded-full px-3 py-2" placeholder="Search...">
              <button type="submit" class="absolute right-0 top-0 mt-2 mr-2">
                <svg class="h-6 w-6 text-gray-400 hover:text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 18l-2-2m-2-2a7 7 0 118 0 7 7 0 01-8 0z" />
                </svg>
              </button>
            </div>
            <!-- Profile dropdown -->
            <div class="ml-3 relative">
              <div>
                <!-- Profile icon -->
              </div>
              <!-- Profile dropdown menu, show/hide based on dropdown state -->
              <div class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-black ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu">
                <!-- Dropdown links -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    // component logic
  };
  </script>
  
  <style>
  /* Additional styles if needed */
  </style>