<template>
  <div class="error-page">
    <div class="image-layer" style="background-image: url(/assets/images/background/not-found-bg.jpg);"></div>
    <section class="not-found">

        <div class="cloud cloud-left"><img src="@/assets/images/resource/404-cloud-left.svg" alt=""></div>
        <div class="cloud cloud-right"><img src="@/assets/images/resource/404-cloud-right.svg" alt=""></div>
        <div class="auto-container">
            <div class="not-found-inner">
                <div class="chat-interface">
                <div v-for="message in messages" :key="message.id">
                    <p v-if="message.isAI">AI: {{ message.content }}</p>
                    <p v-else>User: {{ message.content }}</p>
                </div>
                <button @click="handleButton">Generate booking</button>
                </div>
            </div>
        </div>
    </section>

<!--Scroll to top-->
<div class="scroll-to-top scroll-to-target" datnpa-target="html"><span class="icon"><img src="@/assets/images/icons/arrow-up.svg" alt="" title="Go To Top"></span></div>
</div>
</template>

<script>
  import axios from "axios";
  
  export default {
    data() {
      return {
        messages: [],
        userMessage: "",
        apiKey: "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",
        endpoint: "https://api.openai.com/v1/engines/davinci/completions",
      };
    },
    methods: {
        handleButton(){
            this.sendMessage();
        },
      async sendMessage() {
        // Add user message to the chat
        this.messages.push({ id: Date.now(), content: this.userMessage, isAI: false });
  
        // Clear the input field
        this.userMessage = "Build me a travelplan with hotels and transportation from dates 2023-01-01 to 2023-01-07";
  
        // Call the API to get AI response
        const response = await axios.post(this.endpoint, {
          prompt: this.userMessage,
          max_tokens: 256,
        }, {
          headers: {
            Authorization: `Bearer ${this.apiKey}`,
          },
        });
        console.log(response)
        // Add AI response to the chat
        this.messages.push({ id: Date.now(), content: response.data.choices[0].text.trim(), isAI: true });
      },
    },
  };
</script>

<style>

</style>