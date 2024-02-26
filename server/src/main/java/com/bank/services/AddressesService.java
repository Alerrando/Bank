package com.bank.services;

import com.bank.entities.Addresses;
import com.bank.repositories.AddressesRepository;
import com.nimbusds.openid.connect.sdk.claims.Address;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class AddressesService {
    @Autowired
    private AddressesRepository addressesRepository;

    public Addresses insert(String cep){
        RestTemplate restTemplate = new RestTemplate();
        Addresses addresses = restTemplate.getForObject("https://viacep.com.br/ws/" + cep + "/json", Addresses.class);
        return addresses;
    }
}
