import {model} from './module'
import './style.css'
import {Site} from './class/site'
import { Sidebar } from './class/sidebar'

const site = new Site('#site')
site.render(model)
const sidebar = new Sidebar('#panel')