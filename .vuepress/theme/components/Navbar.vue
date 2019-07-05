<template>
  <div class="bg-gray-100">
    <GradientBar class="h-1" />
      <!-- Top nav -->
      <div class="flex items-center">
        <div class="w-full max-w-screen-xl relative mx-auto px-6">
          <div class="border-b-2 border-gray-200 py-4">
            <div class="h-16 flex items-center -mx-6">
              <!-- Logo section -->
              <div class="lg:w-1/4 xl:w-1/5 pl-6 pr-6">
                <div class="flex items-center">
                  <a  href="/" class="block text-2xl  font-bold">
                    {{$themeConfig.appName}}
                  </a>
                </div>
              </div>

              <div class="flex flex-grow items-center lg:w-3/4 xl:w-4/5">

                <!-- Search section -->
                <div class="w-full lg:px-6 lg:w-3/4 xl:px-12">
                  <Search />
                </div>


                <div id="sidebar-open" class="flex px-6 items-center lg:hidden">
                  <svg class="fill-current w-4 h-4 cursor-pointer text-gray-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                </div>


                <div id="sidebar-close" class="hidden flex px-6 items-center lg:hidden">
                  <svg class="fill-current w-4 h-4 cursor-pointer text-gray-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"/></svg>
                </div>

                <!-- Links section -->
                <div class="hidden lg:flex lg:w-1/4 justify-end px-6">
                 <SocialLink class="items-right" />
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
      <!-- /Top nav -->
      
    </div>
</template>

<script>
import SocialLink from './SocialLink';
import GradientBar from './GradientBar'
// import SearchBox from '@SearchBox'
import Search from './Search'
export default {

  components:{
    SocialLink,
    GradientBar,
    Search
  }
  
}
</script>