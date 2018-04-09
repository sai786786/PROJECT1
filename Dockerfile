FROM nginx
LABEL maintainer "saikiran786786@gmail.com"
HEALTHCHECK --interval=5s \
            --timeout=5s \
            CMD curl -f http://127.0.0.1:8888 || exit 1
EXPOSE 8888
