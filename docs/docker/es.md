# Docker安装ES

```bash
# install in your project
yarn add -D vuepress@next

# create a markdown file
echo '# Hello VuePress' > README.md

# start writing
yarn vuepress dev

# build to static files
yarn vuepress build
```


```java
package cn.aite.controller.funeral;


import cn.hutool.core.util.ObjectUtil;
import cn.aite.common.entity.PageResult;
import cn.aite.common.enums.ResultUtil;
import cn.aite.common.security.AuthUser;
import cn.aite.common.security.context.UserContext;
import cn.aite.common.vo.ResultMessage;
import cn.aite.modules.member.invite.dto.LiInvitePageDto;
import cn.aite.modules.member.invite.entity.LiInvite;
import cn.aite.modules.member.invite.service.LiInviteService;
import cn.aite.modules.member.invite.vo.LiInvitePageVo;
import cn.aite.modules.member.service.MemberService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Objects;

/**
 * 墓园主题Controller
 *
 * @author Agoni
 * @date 2022-05-21
 */
@Api(tags = "我的邀请")
@RestController
@RequestMapping("/buyer/funeral/invite")
public class LiInviteController {


    @Autowired
    private LiInviteService inviteService;


    @Autowired
    private MemberService memberService;


    /**
     * 我的邀请列表
     */
    @ApiOperation("我的邀请列表")
    @GetMapping("/list")
    public ResultMessage<LiInvitePageVo> list(LiInvitePageDto params) {
        AuthUser authUser = Objects.requireNonNull(UserContext.getCurrentUser());
        LiInvitePageVo liInvitePageVo = new LiInvitePageVo();

        if (ObjectUtil.isNotEmpty(authUser)) {
            params.setMemberId(authUser.getId());
            PageResult<LiInvite> liInvitePageResult = inviteService.selectLiInvitePageResult(params);
            for (LiInvite record : liInvitePageResult.getRecords()) {
                record.setInvitedUserName(memberService.getById(record.getInvitedUserId()).getNickName());
            }
            if (liInvitePageResult.getTotal() > 0) {
                liInvitePageVo.setPoints(inviteService.selectLiInviteList(params).stream().map(e -> e.getPoint().intValue()).reduce(Integer::sum).get());
            }

            liInvitePageVo.setPageResult(liInvitePageResult);
        }


        return ResultUtil.data(liInvitePageVo);
    }


}

```

```json:no-line-numbers
{
  "firstName": "John",
  "lastName": "Smith",
  "age": 25
}
```
