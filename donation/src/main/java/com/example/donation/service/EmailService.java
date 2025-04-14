package com.example.donation.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailService {
    @Autowired
    private JavaMailSender mailSender;

    public void sendThankYouEmail(String to, String nomDonateur, String montant, String campagne) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setFrom("stakwa336@gmail.com");
        message.setTo(to);
        message.setSubject("Merci pour votre don !");
        message.setText("Bonjour " + ",\n\n" +
                "Merci pour votre don de " + montant + "€ à la campagne \"" + campagne + "\".\n" +
                "Votre soutien est précieux ❤️.\n\n" +
                "L'équipe HealthSwift");

        mailSender.send(message);
    }
}
