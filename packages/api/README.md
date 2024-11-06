# 사용법

## Docs: https://openapi-generator.tech/

### 환경 구성

```
$ Java 11 runtime at a minimum
```

### 명령어

```
cd package/api

FE swagger 정보 획득 - pnpm fetch:fe
BO swagger 정보 획득 - pnpm fetch:bo
```

### Usage

```
--- API
import { $api } from '#api/handler';
import { feApi } from '#api/model';
import { PageResponseFrontendpromotionCommentListResponse } from '#api/model/fe';

const api = $api(feApi.APIApi, feApi.Configuration);

export const getNoticeList = async () => {
  const { data } = await api.findAll6();

  return data;
};

--- UI
import { getNoticeList } from '@yb/api';
import { PageResponseFrontendcsNoticeListResponse } from '#api/model/fe';

const getNoticeListCall = async () => {
    const data: PageResponseFrontendcsNoticeListResponse = await getNoticeList();
};
getNoticeListCall();
```
