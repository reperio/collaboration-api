CREATE DATABASE reperio_collaboration_dev;

CREATE USER reperio WITH PASSWORD 'reperio';
ALTER USER reperio WITH SUPERUSER;

GRANT ALL PRIVILEGES ON DATABASE reperio_collaboration_dev to reperio;
