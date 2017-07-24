cs:
	if [ -d "../frontend-cs" ]; then \
 	  cd ../frontend-cs && git reset --hard HEAD && git checkout master && GIT_SSH_COMMAND="ssh -o UserKnownHostsFile=/dev/null -o StrictHostKeyChecking=no" git pull; \
	else \
	  GIT_SSH_COMMAND="ssh -o UserKnownHostsFile=/dev/null -o StrictHostKeyChecking=no" git clone git@git.reg.ru:srs/frontend-cs.git ../frontend-cs; \
	fi
	cp ../frontend-cs/.eslintrc .eslintrc
	cp ../frontend-cs/.jshintrc .jshintrc
	cp ../frontend-cs/.csscomb.json .csscomb.json
	cp ../frontend-cs/.stylelintrc .stylelintrc

