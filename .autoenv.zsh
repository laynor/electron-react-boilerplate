PROJECT_ROOT=`dirname ${(%):-%N}`

function run() {
	case $1 in
		electron)
			cd $PROJECT_ROOT
			tmux new-window npm run dev
			;;
		pouchdb)
			cd $PROJECT_ROOT
			tmux new-window pouchdb-server
			tmux new-window chromium http://127.0.0.1:5984/_utils
			;;
		editor)
			code $PROJECT_ROOT
			;;
		all)
			run editor
			run electron
			run pouchdb
			;;
		*)
			echo "Unknown command"
			;;
	esac
}
