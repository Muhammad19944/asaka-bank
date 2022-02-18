import Vue from 'vue'
import Quill from "quill";
import VueQuillEditor from 'vue-quill-editor'

import ImageResize from "./ResizeImage/ImageResize";

Quill.register("modules/imageResize", ImageResize);

import 'quill/dist/quill.core.css' // import styles
import 'quill/dist/quill.snow.css' // for snow theme
import 'quill/dist/quill.bubble.css' // for bubble theme

Vue.use(VueQuillEditor, {
	placeholder: "Inserte el texto aquí..",
	modules: {
		toolbar: [
			["bold", "italic", "underline", "strike"],
			["blockquote", "code-block"],
			[{ header: 1 }, { header: 2 }],
			[{ list: "ordered" }, { list: "bullet" }],
			[{ script: "sub" }, { script: "super" }],
			[{ indent: "-1" }, { indent: "+1" }],
			[{ direction: "rtl" }],
			[{ size: ["small", false, "large", "huge"] }],
			[{ header: [1, 2, 3, 4, 5, 6, false] }],
			[{ font: [] }],
			[{ color: [] }, { background: [] }],
			[{ align: [] }],
			["clean"],
			["link", "image", "video"],
		],
		imageResize: {
			displayStyles: {
				backgroundColor: "black",
				border: "none",
				color: "white"
			},
			modules: ["Resize", "DisplaySize", "Toolbar"]
		}
	}
})
Vue.component("quill-editor", VueQuillEditor.quillEditor);
