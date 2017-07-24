FILES = .eslintrc .jshintrc .csscomb.json .stylelintrc
define \n


endef
cs:
	cd ../frontend-cs && git reset --hard HEAD && git checkout master && GIT_SSH_COMMAND="ssh -o UserKnownHostsFile=/dev/null -o StrictHostKeyChecking=no" git pull;

demo:
	$(foreach var, $(FILES), cp -f $(var) ../$(target)/$(var)${\n})

