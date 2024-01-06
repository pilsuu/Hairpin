package hairpin.demo.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.concurrent.TimeUnit;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.data.redis.core.ValueOperations;

@CrossOrigin(origins = { "http://localhost:3000" })
@RestController
@RequestMapping
public class RedisTester {

    private final RedisTemplate<String, String> redisTemplate;

    @Autowired
    public RedisTester(RedisTemplate<String, String> redisTemplate) {
        this.redisTemplate = redisTemplate;
    }

    @PostMapping("/redisInsert")
    @ResponseBody
    public String insertTest(String key, String value, Long expiredTime) {

        redisTemplate.opsForValue().set(key, key, expiredTime, TimeUnit.MILLISECONDS);
        ;
        return "done";
    }

    @GetMapping("/redisQuery")
    @ResponseBody
    public String getData(String key) {
        return (String) redisTemplate.opsForValue().get(key);
    }
}
