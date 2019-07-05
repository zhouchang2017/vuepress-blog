<template>
  <div class="">
    
    <Navbar/>
    
    <!-- Main container -->
    <div class="w-full max-w-screen-xl mx-auto px-6">
      <div class="container mx-auto">
        <ArticleList class="lg:mx-36"/>
      </div>
      <div class="lg:flex -mx-6">
        <!-- Side nav -->
        <div id="sidebar" class="hidden absolute z-90 top-16 bg-white w-full border-b -mb-16 lg:-mb-0 lg:static lg:bg-transparent lg:border-b-0 lg:pt-0 lg:w-1/4 lg:block lg:border-0 xl:w-1/5">
          <div class="lg:block lg:relative lg:sticky lg:top-0 overflow-hidden">
            <!-- <SidebarNavigation class="sticky?lg:h-screen" /> -->
          </div>
        </div>
        <!-- /Side nav -->

        <!-- Right content/TOC pane -->
        <div id="content-wrapper" class="min-h-screen w-full lg:static lg:max-h-full lg:overflow-visible lg:w-3/4 xl:w-4/5 ">

          <!-- "Turbolinks" -->
          <div id="content">

            <!-- Vue-enabled area -->
            <div id="app" class="flex" v-cloak>

              <!-- Main content area -->
              <div id="content" class="pt-12 pb-16 lg:pt-12 w-full">
                
                <div class="markdown mb-6 px-6 max-w-3xl mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12 xl:w-3/4">
                  <!-- @if ($page->title) -->
                  <h1>(Page Title)</h1>
                  <!-- @endif -->

                  <!-- @if ($page->description) -->
                  <div class="mt-0 mb-4 text-gray-600">
                    (Page description)
                  </div>
                  <!-- @endif -->

                  <!-- @if ($page->titleBorder) -->
                  <hr class="my-8 border-b-2 border-gray-200">
                  <!-- @endif -->

                </div>

                <div class="flex">
                  <div class="markdown px-6 xl:px-12 w-full max-w-3xl mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:w-3/4">
                    <Content class="markdown" />
                  </div>

                  <!-- Table of contents -->
                  <div class="hidden xl:text-sm xl:block xl:w-1/4 xl:px-6">
                    <div class="flex flex-col justify-between overflow-y-auto sticky top-0 max-h-screen pt-12 pb-4 -mt-12">
                      <!-- <TableOfContents class="mb-8"/> -->
                      <div id="ad"></div>
                    </div>
                  </div>
                  <!-- /Table of contents -->
                </div>
              </div>
              <!-- /Main content area -->
            </div>
            <!-- /Vue-enabled area -->
          </div>
          <!-- /"Turbolinks" -->
        </div>
        <!-- /Right content/TOC pane -->
      </div>
    </div>
    <!-- /Main container -->

    <svg style="height: 0; width: 0; position: absolute; visibility: hidden;">
      <defs>
        <linearGradient x1="0%" y1="0%" y2="100%" id="logoGradient">
          <stop stop-color="#2383AE" offset="0%"></stop>
          <stop stop-color="#6DD7B9" offset="100%"></stop>
        </linearGradient>
      </defs>
    </svg>
  </div>
</template>

<script>
  import Navbar from '../components/Navbar'
  import ArticleList from '../components/ArticleList'
  export default {
    components: {
      Navbar,
      ArticleList
    }
  }
</script>

<style src="../styles/app.css"></style>