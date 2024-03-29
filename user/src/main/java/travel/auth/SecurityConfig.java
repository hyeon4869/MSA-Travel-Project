package travel.auth;

import javax.servlet.http.HttpServletResponse;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.security.web.access.AccessDeniedHandler;

import lombok.RequiredArgsConstructor;
import travel.domain.UserRepository;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
public class SecurityConfig extends WebSecurityConfigurerAdapter{
   
    private final UserRepository userRepository;

    //BCrypt 암호화를 사용하기 위한 메소드
    @Bean
    public BCryptPasswordEncoder passwordEncoder(){
        return new BCryptPasswordEncoder();
    }


    @Override
    public void configure(HttpSecurity http) throws Exception{
        
        //csrf는 disable
        http.csrf().disable();
    
        //세션을 사용x
        http.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
            .and()
            // CrossOrigin(인증x), 시큐리티에 필터 등록(o)
            //.addFilter(corsFilter)
            // formLogin 방식 비활성화
            .formLogin().disable()
            // httpBasic 방식 비활성화
            .httpBasic().disable()
            .addFilter(new JwtAuthenticationFilter(authenticationManager(), userRepository))//생성자 
            .exceptionHandling()
                .authenticationEntryPoint(authenticationEntryPoint())
                .accessDeniedHandler(accessDeniedHandler())
            .and()
            .authorizeRequests()
            .anyRequest().permitAll();
            }


     // 인증 실패 핸들러 설정
    private AuthenticationEntryPoint authenticationEntryPoint() {
        return (request, response, authException) -> {
            response.sendError(HttpServletResponse.SC_UNAUTHORIZED, "사용할 권한이 없습니다.");
        };
    }

    // 권한 없음 핸들러 설정
    private AccessDeniedHandler accessDeniedHandler() {
        return (request, response, accessDeniedException) -> {
            response.setStatus(HttpServletResponse.SC_FORBIDDEN);
            response.getWriter().write("권한이 없다.");
        };
    }
    
}