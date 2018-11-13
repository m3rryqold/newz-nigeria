<template>
    <div class="columns is-multiline">
        <div
            class="column is-one-quarter"
            v-for="(article, index) in articles"
            :key="index">
            <a :href="article.url" target="_blank">
                <div class="card">
                <div class="card-image">
                    <figure class="image is-3by2">
                    <img :src="article.urlToImage" :alt="article.title">
                    </figure>
                </div>
                <div class="card-content">
                    <div class="content"> 
                    {{ article.title }}
                    <!-- <br> 
                    <span>{{ article.publishedAt | timeSince }}</span>
                    <br>
                    <span>{{ article.publishedAt | day }}</span> -->
                    <br>
                    <div class="tags has-addons">
                        <!-- <span class="tag">Source</span> -->
                        <span class="tag is-dark">{{ article.source.name }}</span>
                    </div>
                    </div>
                </div>
                </div>
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                articles:{}
            }
        },
        beforeMount() {
            this.$axios.$get(
                    `https://newsapi.org/v2/top-headlines?country=ng&category=entertainment&apiKey=${ 
                        process.env.API_KEY 
                    }`
                    ).then(data=>{
                        this.articles = data.articles;
                        console.log(data.articles);
                    })
                
        },
        methods: {
        }
    }
</script>
