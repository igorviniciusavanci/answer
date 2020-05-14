FROM postgres:12.2

# add backup scripts
ADD bin/backup.sh /usr/local/bin/backup
ADD bin/restore.sh /usr/local/bin/restore
ADD bin/list-backups.sh /usr/local/bin/list-backups

# Install extensions
ADD bin/install-extensions.sh /docker-entrypoint-initdb.d/

# make them executable
RUN chmod +x /usr/local/bin/restore
RUN chmod +x /usr/local/bin/list-backups
RUN chmod +x /usr/local/bin/backup
