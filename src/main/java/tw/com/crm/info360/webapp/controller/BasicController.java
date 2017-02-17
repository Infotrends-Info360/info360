package tw.com.crm.info360.webapp.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

/**
 * 基本導頁設定
 * 
 * @author Billy
 */
@Controller
public class BasicController {

	/**
	 * 預設「歡迎頁面」
	 * 
	 * @param name
	 * @param tel
	 * @param model
	 * 
	 * @return String 透過字串指定轉導頁面
	 */
	@RequestMapping(value = "/")
	public String showIndex() {
		return "console";
	}

	/**
	 * 
	 * @param name
	 * @param tel
	 * @param model
	 * 
	 * @return String 透過字串指定轉導頁面
	 */
	@RequestMapping("/console") // 作用等同<url-pattern>
	public String console() {
		return "/console"; // 頁面導向 /WEB-INF/views/ 搜索檔案類型.jsp
	}

	/**
	 * 
	 * @param userName
	 * @param password
	 * @param model
	 * 
	 * @return String 透過字串指定轉導頁面
	 */
	@RequestMapping("/main") // 作用等同<url-pattern>
	public String main(@RequestParam(value = "userName", required = false) String userName,
			@RequestParam(value = "password", required = false) String password, Model model) {
		model.addAttribute("userName", userName);
		model.addAttribute("password", password);

		return "main_view"; // 頁面導向 /WEB-INF/views/ 搜索檔案類型.jsp
	}

	/*--------- Tab 分頁導頁控制區 ----------*/
	@RequestMapping(value = "dashboard")
	public String showDashBoard() {
		return "info360/dashboard";
	}

	@RequestMapping(value = "query")
	public String showQuery() {
		return "info360/query";
	}

	@RequestMapping(value = "setting")
	public String showSetting() {
		return "info360/setting";
	}

	@RequestMapping(value = "password")
	public String showPassowrd() {
		return "info360/password";
	}

	/*--------- Chat 分頁導頁控制區 ----------*/
	@RequestMapping(value = "chat1")
	public String showChatV1() {
		return "info360/chat/chat_v1";
	}

	@RequestMapping(value = "chat2")
	public String showChatV2() {
		return "info360/chat/chat_v2";
	}

}