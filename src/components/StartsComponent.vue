<script setup>


</script>

  <template>
    <form>
      <p class="clasification">
        <input id="radio1" type="radio" name="stars" value="5"><!--
    --> <label for="radio1">★</label><!--
    --> <input id="radio2" type="radio" name="stars" value="4"><!--
    --> <label for="radio2">★</label><!--
    --> <input id="radio3" type="radio" name="stars" value="3"><!--
    --> <label for="radio3">★</label><!--
    --> <input id="radio4" type="radio" name="stars" value="2"><!--
    --> <label for="radio4">★</label><!--
    --> <input id="radio5" type="radio" name="stars" value="1"><!--
    --> <label for="radio5">★</label>
      </p>
    </form>
</template>

<style lang="scss" scoped>

#form {
  width: 250px;
  margin: 0 auto;
  height: 50px;
}

#form p {
  text-align: center;
}

#form label {
  font-size: 20px;
}

input[type="radio"] {
  display: none;
}

label {
  color: grey;
}

.clasification {
  direction: rtl;
  unicode-bidi: bidi-override;
}

label:hover,
label:hover ~ label {
  color: yellow;
}

input[type="radio"]:checked ~ label {
  color: yellow;
}

</style>