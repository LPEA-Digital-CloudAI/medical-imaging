#!/bin/bash
# Copyright 2024 Google LLC
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

# gRPC's C-core (abseil) is not fork-safe.  In Gunicorn's prefork + gthread
# model the master forks workers that then create thread pools; if gRPC state
# was inherited from the master the internal mutexes can corrupt → crash.
# GRPC_ENABLE_FORK_SUPPORT tells gRPC to re-initialise after fork().
# GRPC_POLL_STRATEGY=poll avoids epoll fd-inheritance issues across forks.
export GRPC_ENABLE_FORK_SUPPORT=1
export GRPC_POLL_STRATEGY=poll

/usr/sbin/nginx -c /nginx.conf -e stderr
python3 -OO /pathology/dicom_proxy/server.pyc