'use strict';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

AOS.init();

import * as Turbo from "@hotwired/turbo";
import { Modal, Dropdown } from "bootstrap";
import Button from "./buttons";
import Greeting from "./greeting";
import Theme from "./theme";
import Header from "./header";
import Contact from "./contact";

const turboLoad = () => {
    Button.apply(Button);
    Greeting.apply(Greeting);
    Theme.apply(Theme);
    Header.apply(Header);
    Contact.apply(Contact);
}

document.addEventListener("turbo:load", turboLoad);