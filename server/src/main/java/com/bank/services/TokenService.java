package com.bank.services;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.exceptions.JWTVerificationException;
import com.bank.entities.User;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.time.LocalDateTime;
import java.time.ZoneOffset;

@Service
public class TokenService {

    @Autowired
    private HttpServletResponse response;

    @Value("${jwt.cookieExpiry}")
    private int cookieExpiry;

    @Value("${api.security.token.secret}")
    private String secret;
    public void generateToken(User user) {
        try {
            if (user != null) {
                Algorithm algorithm = Algorithm.HMAC256(secret);
                String token = JWT.create()
                        .withIssuer("auth-api") //Emissor do token
                        .withSubject(user.getEmail()) //Usuário que está recebendo o token
                        .withExpiresAt(getExpirationDate()) //Tempo de expiração
                        .sign(algorithm);

                Cookie cookie = new Cookie("accessToken", token);
                cookie.setHttpOnly(true);
                cookie.setSecure(false); // Altere para true se estiver usando HTTPS
                cookie.setPath("/");
                cookie.setMaxAge(cookieExpiry);

                response.addCookie(cookie);
            }
        } catch (JWTVerificationException exception) {
            throw new RuntimeException("Error while generating token", exception);
        }
    }

    public String validateToken(String token){
        try {
            Algorithm algorithm = Algorithm.HMAC256(secret);
            return JWT.require(algorithm)
                    .withIssuer("auth-api")
                    .build() //Motando o dado
                    .verify(token)
                    .getSubject();
        } catch (JWTVerificationException exception){
            return "";
        }
    }

    private Instant getExpirationDate(){
        return LocalDateTime.now().plusHours(2).toInstant(ZoneOffset.of("-03:00"));
    }
}
