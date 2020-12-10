<template>
    <div class="form-group">
        <label>{{this.label}}</label>
        <input type="text"
        class="form-control"
        :placeholder="this.label"
        :value="value"
        @input="$emit('update', $event.target.value)">
        <div class="error" v-if="validationRuleRequired.$dirty"><span v-if="!validationRuleRequired.required">Field is required</span></div>
        <small class="form-text text-muted">{{hintText}}</small>
    </div>
</template>

<script>
    export default {
        name : 'InputText',
        props: {
            value: String|Number,
            label: String,
            hintText: String,
            validationRuleRequired: Object,
        },
        model: {
            prop: "value",
            event: "update"
        }
    }
</script>
