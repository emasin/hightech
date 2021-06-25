export default [
  {
    path: '/',
    component: '../layouts/BlankLayout',
    routes: [
      {
        path: '/user',
        component: '../layouts/UserLayout',
        routes: [
          {
            name: 'login',
            path: '/user/login',
            component: './User/login',
          },
        ],
      },
      {
        path: '/',
        component: '../layouts/SecurityLayout',
        routes: [
          {
            path: '/',
            component: '../layouts/BasicLayout',
            authority: ['admin', 'user'],
            routes: [
              {
                path: '/',
                redirect: '/welcome',
              },
              {
                path: '/welcome',
                name: 'welcome',
                icon: 'smile',
                component: './Welcome',
              },
              {
                path: '/admin',
                name: '관리자',
                icon: 'crown',
                component: './Admin',
                authority: ['admin'],
                routes: [
                  {
                    path: '/admin/notice',
                    name: '공지사항관리',
                    icon: 'smile',
                    component: './Admin/Notice',
                    authority: ['admin'],
                  },
                  {
                    path: '/admin/agency',
                    name: '대리점관리',
                    icon: 'smile',
                    component: './Admin/Agency',
                    authority: ['admin'],
                  },
                  {
                    path: '/admin/spot',
                    name: '현장관리',
                    icon: 'smile',
                    component: './Admin/Spot',
                    authority: ['admin'],
                  },
                  {
                    path: '/admin/spotbyagency',
                    name: '대리점 현장조회',
                    icon: 'smile',
                    component: './Admin/SpotByAgency',
                    authority: ['admin'],
                  },
                  {
                    path: '/admin/as',
                    name: 'AS접수관리',
                    icon: 'smile',
                    component: './AS',
                    authority: ['admin'],
                  },
                ],
              },
              {
                path: '/agency',
                name: '대리점',
                icon: 'user',
                authority: ['admin'],
                routes: [

                  {
                    path: '/agency/notice',
                    name: '공지사항',
                    icon: 'smile',
                    component: './Agency/Notice',
                    authority: ['admin'],
                  },
                  {
                    path: '/agency/as',
                    name: 'AS접수현황',
                    icon: 'smile',
                    component: './AS',
                    authority: ['admin'],
                  },
                ],
              },

              {
                component: './404',
              },
            ],
          },
          {
            component: './404',
          },
        ],
      },
    ],
  },
  {
    component: './404',
  },
];
