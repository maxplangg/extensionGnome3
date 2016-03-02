
const Main = imports.ui.main;

function init() {}

function enable() {
	Main.panel.statusArea['keyboard'].actor.hide();
}

function disable() {
	Main.panel.statusArea['keyboard'].actor.show();
}
