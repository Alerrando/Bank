package com.bank.util;

import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
public class CookiesEvent {
    @Autowired
    HttpServletRequest request;

    @Autowired
    private HttpServletResponse response;

    @Value("${jwt.cookieExpiry}")
    private int cookieExpiry;

    public void addCookie(String name, String value){
        Cookie cookie = new Cookie(name, value);
        cookie.setHttpOnly(true);
        cookie.setSecure(false); // Altere para true se estiver usando HTTPS
        cookie.setPath("/");
        cookie.setMaxAge(cookieExpiry);

        response.addCookie(cookie);
    }

    public String getValueCookie(String name){
        if (request.getCookies() != null) {
            for (Cookie cookie : request.getCookies()) {
                if (cookie.getName().equals(name)) {
                    return cookie.getValue();
                }
            }
        }

        return "";
    }
}
