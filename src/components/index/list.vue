<template>
        <div class="content-block-title">相关问题</div>
        <div class="list-block" id="help-list">
            <ul class="list-container">
                <li v-for="faq in faqs | filterBy keyword in 'q' 'a' | limitBy 10">
                    <a v-link="{ name: 'question', params: { id: faq.id }}"  class="item-link">
                        <div class="item-content">
                            <div class="item-inner">
                                <div class="item-title" v-html="faq.q | highLight keyword"></div>
                            </div>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
</template>
<script>
    export default {
        props : ['keyword'],
        data : function (){
            return {
                'faqs' : ''
            }
        },
        ready : function(){
            // GET reques
            this.$http({url:'./data/faq.json',method:'get'}).then(function (response) {
                var faqData = response.data;
                // set data on vm
                this.$set('faqs', faqData.faqs)

            },function (response) {
                return "Data Error";
                // handle error
            });
        }
    }
</script>