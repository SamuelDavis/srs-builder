<template>
  <b-form>
    <srs-input-group label="User Stories" description="This template illustrates organizing the functional requirements for the product by system features, the major services provided by the product.">
      <b-list-group flush>
        <b-list-group-item v-for="(_, i) in data.stories" :key="i">
          <b-form-row>
            <b-col>
              <b-form-group label="In order to..." description="These options are supplied from the Summary section's Functions.">
                <b-select v-model="data.stories[i].description" :options="meta.descriptions">
                  <template v-slot:first>
                    <option :value="null">...</option>
                  </template>
                </b-select>
              </b-form-group>
            </b-col>
            <srs-remove-badge :click="() => data.stories.splice(i, 1)"/>
          </b-form-row>
          <b-form-row>
            <b-col>
              <b-form-group label="As a..." description="These options are supplied from the Summary section's Users">
                <b-select v-model="data.stories[i].user" :options="meta.users">
                  <template v-slot:first>
                    <option :value="null">...</option>
                  </template>
                </b-select>
              </b-form-group>
            </b-col>
          </b-form-row>
          <b-form-group class="mb-0" label="I do the following...">
            <ol>
              <li v-for="(_, j) in data.stories[i].steps" :key="j" :class="{'mb-2': j < data.stories[i].steps.length - 1}">
                <b-form-row>
                  <b-col>
                    <b-form-group class="mb-0">
                      <b-textarea v-model="data.stories[i].steps[j]"></b-textarea>
                    </b-form-group>
                  </b-col>
                  <srs-remove-badge :click="() => data.stories[i].steps.splice(j, 1)"/>
                </b-form-row>
              </li>
            </ol>
          </b-form-group>
        </b-list-group-item>
      </b-list-group>
    </srs-input-group>
  </b-form>
</template>

<script>
  export default {
    name: 'srs-stories',
    data () {
      return {
        meta: {
          descriptions: ['foo', 'bar', 'thud'],
          users: ['fiz', 'baz', 'grunt']
        },
        data: {
          stories: []
        }
      }
    },
    watch: {
      'data.stories': {
        immediate: true,
        deep: true,
        handler (value) {
          if (value.length < 1 || value[value.length - 1].description) {
            value.push({
              description: null,
              user: null,
              steps: []
            })
          }

          value.forEach((story) => {
            if (story.steps.length < 1 || story.steps[story.steps.length - 1]) {
              story.steps.push(null)
            }
          })
        }
      }
    }
  }
</script>

<style lang="scss">
  ol {
    padding-left: 1em;
  }
</style>
