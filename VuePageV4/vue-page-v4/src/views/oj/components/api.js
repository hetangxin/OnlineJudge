import axios from 'axios'//使用ajax


axios.defaults.xsrfHeaderName = 'X-CSRFToken';
axios.defaults.xsrfCookieName = 'csrftoken';

export default {
    name: 'Api',
    /**
     *
     * @param page
     * @param per_page
     * @param resType 需求结果类型
     * @returns {AxiosPromise}
     */
    findProblemsByPagePer_PageAndResultType(page, per_page, resType) {
        return axios({
            url: "/api/api-oj/problems/defunct/1?page=" + page + "&per_page=" + per_page + "&resType=" + resType,
            method: 'get',
        })
    },

    /**
     * 查询制定Id题目
     * @param problem_id
     * @returns {AxiosPromise}
     */
    findProblemByProblemId(problem_id) {
        return axios({
            url: '/api/api-oj/problem/' + problem_id,
            method: 'get',
        });
    },

    /**
     * 提交解题
     * @param submit 解题json对象
     * @param jwt 令牌
     * @returns {AxiosPromise}
     */
    insertNewSolution(submit, jwt) {
        return axios({
            url: '/api/api-oj/submit',
            data: JSON.stringify(submit),
            method: 'post',
            headers: {
                "jwt": jwt,
                "Content-Type": "application/json"
            }
        })
    },

    /**
     * 获取solutions集合
     * @param page 页码
     * @param per_page 每页数量
     * @param jwt 令牌
     * @returns {AxiosPromise}
     */
    getSolutions(page, per_page, jwt) {
        return axios({
            url: "/api/api-oj/solutions?page=" + page + "&per_page=" + per_page,
            method: "get",
            headers: {
                "jwt": jwt,
            }
        })
    },

    /**
     * 查询新闻
     * @param page 页码
     * @param per_page 每页数量
     */
    findNews(page, per_page) {
        return axios({
            url: "/api/api-oj/news?page=" + page + "&per_page=" + per_page,
            method: "get",
        })
    },

    /**
     * 查询标签
     * @param page 页码
     * @param per_page 每页数量
     */
    findTags(page, per_page) {
        return axios({
            url: "/api/api-oj/tags?page=" + page + "&per_page=" + per_page,
            method: "get",
        });
    },

    /**
     * 根据页码和标签Id查询题目
     * @param tag_id 标签Id
     * @param page 页码
     * @param per_page 每页数量
     */
    findProblemsByTagId(tag_id, page, per_page) {
        let params = new URLSearchParams();
        params.append("page", page);
        params.append("per_page", per_page);
        return axios({
            url: "/api/api-oj/problems/tag/" + tag_id,
            method: "get",
            data: params,
        });
    },

    /**
     * 查询竞赛
     * @param page 页码
     * @param per_page 每页数量
     */
    findContestByPage(page, per_page) {
        return axios({
            url: "/api/api-oj/contests?page=" + page + "&per_page=" + per_page,
            method: "get",
        })
    }
}