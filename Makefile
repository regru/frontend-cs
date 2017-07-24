FILES = .eslintrc .jshintrc .csscomb.json .stylelintrc
define \n


endef
cs:

ifneq ($(target),)
	git reset --hard HEAD && git checkout master && GIT_SSH_COMMAND="ssh -o UserKnownHostsFile=/dev/null -o StrictHostKeyChecking=no" git pull;
	@$(foreach var, $(FILES), cp -f $(var) ../$(target)/$(var)${\n})
	@echo "Файлы CS скопированы"
endif

demo:
	cd ../frontend-cs && make cs target=$(target)
