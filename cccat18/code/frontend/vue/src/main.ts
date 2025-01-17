import { createApp } from 'vue';
import App from "./App.vue";
import './style.css';
import { AccountGatewayHttp } from './infra/gateway/AccountGateway';
import { AxiosAdapter } from './infra/http/HttpClient';

const app = createApp(App);
const accountGateway = new AccountGatewayHttp(new AxiosAdapter());
app.provide("accountGateway", accountGateway);
app.mount('#app');
