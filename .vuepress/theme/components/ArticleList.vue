<template>
    <div class="mt-10">
        <ArticleCard v-for="item in articleList" :key="item.key" :article="item" class="mb-16" />
    </div>
</template>

<script>
import ArticleCard from './ArticleCard'
export default {
    
    components:{
        ArticleCard
    },

    props:{
        list:{
            default:null
        }
    },

    computed:{
        articleList(){
            return this.list || this.$site.pages.filter(item=>item.regularPath!=="/")
        }
    }

}
</script>