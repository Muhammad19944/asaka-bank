<template>
  <div class="faq-view">
    <v-container>
      <div class="faq-content py-10">
        <div class="app-collapse">
          <div class="app-collapse-item credit-widget rounded-lg">
            <v-expansion-panels accordion>
              <v-expansion-panel>
                <v-expansion-panel-header>
                  <h4 class="font-600">
                    <I18nVue t="SHAREHOLDERS_AND_INVESTORS.BankPerformance.title" />
                    01.04.2019
                  </h4>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  <v-simple-table class="app-table app-table__border">
                    <template v-slot:default>
                      <thead>
                      <tr>
                        <th class="text-left">
                          <h4 class="dark-text font-600">№</h4>
                        </th>
                        <th class="text-left">
                          <h4 class="dark-text font-600">
                            <I18nVue t="SHAREHOLDERS_AND_INVESTORS.BankPerformance.displayName" />
                          </h4>
                        </th>
                        <th class="text-left">
                          <h4 class="dark-text font-600">
                            <I18nVue t="SHAREHOLDERS_AND_INVESTORS.BankPerformance.milliardSum" />
                          </h4>
                        </th>
                      </tr>
                      </thead>
                      <tbody>
                      <tr>
                        <td width="30%" class="py-4">
                          <h5 class="font-600">1</h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">
                            <I18nVue t="SHAREHOLDERS_AND_INVESTORS.BankPerformance.totalCapital" />
                          </h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">3 162.5</h5>
                        </td>
                      </tr>
                      <tr>
                        <td width="30%" class="py-4">
                          <h5 class="font-600">1.1</h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">
                            <I18nVue t="SHAREHOLDERS_AND_INVESTORS.BankPerformance.AuthorizedCapital" />
                          </h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">2 796.0</h5>
                        </td>
                      </tr>
                      <tr>
                        <td width="30%" class="py-4">
                          <h5 class="font-600">2</h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">
                            <I18nVue t="SHAREHOLDERS_AND_INVESTORS.BankPerformance.totalAssets" />
                          </h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">31 545.6</h5>
                        </td>
                      </tr>
                      <tr>
                        <td width="30%" class="py-4">
                          <h5 class="font-600">3</h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">
                            <I18nVue t="SHAREHOLDERS_AND_INVESTORS.BankPerformance.fundsCorrespondent" />
                          </h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">407.6</h5>
                        </td>
                      </tr>
                      <tr>
                        <td width="30%" class="py-4">
                          <h5 class="font-600">4</h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">
                            <I18nVue t="SHAREHOLDERS_AND_INVESTORS.BankPerformance.cashHand" />
                          </h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">221.7</h5>
                        </td>
                      </tr>
                      <tr>
                        <td width="30%" class="py-4">
                          <h5 class="font-600">5</h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">
                            <I18nVue t="SHAREHOLDERS_AND_INVESTORS.BankPerformance.fundsMandatory" />
                          </h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">228.2</h5>
                        </td>
                      </tr>
                      <tr>
                        <td width="30%" class="py-4">
                          <h5 class="font-600">6</h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">
                            <I18nVue t="SHAREHOLDERS_AND_INVESTORS.BankPerformance.creditInvestments" />
                          </h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">28 265.5</h5>
                        </td>
                      </tr>
                      <tr>
                        <td width="30%" class="py-4">
                          <h5 class="font-600">7</h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">
                            <I18nVue t="SHAREHOLDERS_AND_INVESTORS.BankPerformance.loansForeign" />
                          </h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">22 249.0</h5>
                        </td>
                      </tr>
                      <tr>
                        <td width="30%" class="py-4">
                          <h5 class="font-600">8</h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">
                            <I18nVue t="SHAREHOLDERS_AND_INVESTORS.BankPerformance.mortgageLoans" />
                          </h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">1 236.8</h5>
                        </td>
                      </tr>
                      <tr>
                        <td width="30%" class="py-4">
                          <h5 class="font-600">9</h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">
                            <I18nVue t="SHAREHOLDERS_AND_INVESTORS.BankPerformance.consumerLoans" />
                          </h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">293.1</h5>
                        </td>
                      </tr>
                      <tr>
                        <td width="30%" class="py-4">
                          <h5 class="font-600">10</h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">
                            <I18nVue t="SHAREHOLDERS_AND_INVESTORS.BankPerformance.microCredits" />
                          </h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">227.2</h5>
                        </td>
                      </tr>
                      <tr>
                        <td width="30%" class="py-4">
                          <h5 class="font-600">11</h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">
                            <I18nVue t="SHAREHOLDERS_AND_INVESTORS.BankPerformance.investmentPortfolio" />
                          </h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">396.7</h5>
                        </td>
                      </tr>
                      <tr>
                        <td width="30%" class="py-4">
                          <h5 class="font-600">12</h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">
                            <I18nVue t="SHAREHOLDERS_AND_INVESTORS.BankPerformance.attractedDeposits" />
                          </h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">7 389.9</h5>
                        </td>
                      </tr>
                      <tr>
                        <td width="30%" class="py-4">
                          <h5 class="font-600">13</h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">
                            <I18nVue t="SHAREHOLDERS_AND_INVESTORS.BankPerformance.depositsPopulation" />
                          </h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">1 060.5</h5>
                        </td>
                      </tr>
                      <tr>
                        <td width="30%" class="py-4">
                          <h5 class="font-600">14</h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">
                            <I18nVue t="SHAREHOLDERS_AND_INVESTORS.BankPerformance.issuedBank" />
                          </h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">114.5</h5>
                        </td>
                      </tr>
                      <tr>
                        <td width="30%" class="py-4">
                          <h5 class="font-600">15</h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">
                            <I18nVue t="SHAREHOLDERS_AND_INVESTORS.BankPerformance.bankBenefits" />
                          </h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">8.5</h5>
                        </td>
                      </tr>
                      <tr>
                        <td width="30%" class="py-4">
                          <h5 class="font-600">16</h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">
                            <I18nVue t="SHAREHOLDERS_AND_INVESTORS.BankPerformance.customerBase" />
                          </h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">2 008 941</h5>
                        </td>
                      </tr>
                      <tr>
                        <td width="30%" class="py-4">
                          <h5 class="font-600">16.1</h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">
                            <I18nVue t="SHAREHOLDERS_AND_INVESTORS.BankPerformance.individuals" />
                          </h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">1 957 262</h5>
                        </td>
                      </tr>
                      <tr>
                        <td width="30%" class="py-4">
                          <h5 class="font-600">17</h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">
                            <I18nVue t="SHAREHOLDERS_AND_INVESTORS.BankPerformance.numberBranches" />
                          </h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">27</h5>
                        </td>
                      </tr>
                      <tr>
                        <td width="30%" class="py-4">
                          <h5 class="font-600">18</h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">
                            <I18nVue t="SHAREHOLDERS_AND_INVESTORS.BankPerformance.numberMiniBanks" />
                          </h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">77</h5>
                        </td>
                      </tr>
                      </tbody>
                    </template>
                  </v-simple-table>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </div>

          <div class="app-collapse-item credit-widget rounded-lg">
            <v-expansion-panels accordion>
              <v-expansion-panel>
                <v-expansion-panel-header>
                  <h4 class="font-600">
                    <I18nVue t="SHAREHOLDERS_AND_INVESTORS.BankPerformance.title" />
                    01.01.2019
                  </h4>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  <v-simple-table class="app-table app-table__border">
                    <template v-slot:default>
                      <thead>
                      <tr>
                        <th class="text-left">
                          <h4 class="dark-text font-600">№</h4>
                        </th>
                        <th class="text-left">
                          <h4 class="dark-text font-600">
                            <I18nVue t="SHAREHOLDERS_AND_INVESTORS.BankPerformance.displayName" />
                          </h4>
                        </th>
                        <th class="text-left">
                          <h4 class="dark-text font-600">
                            <I18nVue t="SHAREHOLDERS_AND_INVESTORS.BankPerformance.milliardSum" />
                          </h4>
                        </th>
                      </tr>
                      </thead>
                      <tbody>
                      <tr>
                        <td width="30%" class="py-4">
                          <h5 class="font-600">1</h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">
                            <I18nVue t="SHAREHOLDERS_AND_INVESTORS.BankPerformance.totalCapital" />
                          </h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">3 160.0</h5>
                        </td>
                      </tr>
                      <tr>
                        <td width="30%" class="py-4">
                          <h5 class="font-600">1.1</h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">
                            <I18nVue t="SHAREHOLDERS_AND_INVESTORS.BankPerformance.AuthorizedCapital" />
                          </h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">2 098.9</h5>
                        </td>
                      </tr>
                      <tr>
                        <td width="30%" class="py-4">
                          <h5 class="font-600">2</h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">
                            <I18nVue t="SHAREHOLDERS_AND_INVESTORS.BankPerformance.totalAssets" />
                          </h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">30 361.2</h5>
                        </td>
                      </tr>
                      <tr>
                        <td width="30%" class="py-4">
                          <h5 class="font-600">3</h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">
                            <I18nVue t="SHAREHOLDERS_AND_INVESTORS.BankPerformance.fundsCorrespondent" />
                          </h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">626.1</h5>
                        </td>
                      </tr>
                      <tr>
                        <td width="30%" class="py-4">
                          <h5 class="font-600">4</h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">
                            <I18nVue t="SHAREHOLDERS_AND_INVESTORS.BankPerformance.cashHand" />
                          </h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">335.1</h5>
                        </td>
                      </tr>
                      <tr>
                        <td width="30%" class="py-4">
                          <h5 class="font-600">5</h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">
                            <I18nVue t="SHAREHOLDERS_AND_INVESTORS.BankPerformance.fundsMandatory" />
                          </h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">245.1</h5>
                        </td>
                      </tr>
                      <tr>
                        <td width="30%" class="py-4">
                          <h5 class="font-600">6</h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">
                            <I18nVue t="SHAREHOLDERS_AND_INVESTORS.BankPerformance.creditInvestments" />
                          </h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">26 607.1</h5>
                        </td>
                      </tr>
                      <tr>
                        <td width="30%" class="py-4">
                          <h5 class="font-600">7</h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">
                            <I18nVue t="SHAREHOLDERS_AND_INVESTORS.BankPerformance.loansForeign" />
                          </h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">20 825.5</h5>
                        </td>
                      </tr>
                      <tr>
                        <td width="30%" class="py-4">
                          <h5 class="font-600">8</h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">
                            <I18nVue t="SHAREHOLDERS_AND_INVESTORS.BankPerformance.mortgageLoans" />
                          </h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">1 137.9</h5>
                        </td>
                      </tr>
                      <tr>
                        <td width="30%" class="py-4">
                          <h5 class="font-600">9</h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">
                            <I18nVue t="SHAREHOLDERS_AND_INVESTORS.BankPerformance.consumerLoans" />
                          </h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">229.8</h5>
                        </td>
                      </tr>
                      <tr>
                        <td width="30%" class="py-4">
                          <h5 class="font-600">10</h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">
                            <I18nVue t="SHAREHOLDERS_AND_INVESTORS.BankPerformance.microCredits" />
                          </h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">626.4</h5>
                        </td>
                      </tr>
                      <tr>
                        <td width="30%" class="py-4">
                          <h5 class="font-600">11</h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">
                            <I18nVue t="SHAREHOLDERS_AND_INVESTORS.BankPerformance.investmentPortfolio" />
                          </h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">403.4</h5>
                        </td>
                      </tr>
                      <tr>
                        <td width="30%" class="py-4">
                          <h5 class="font-600">12</h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">
                            <I18nVue t="SHAREHOLDERS_AND_INVESTORS.BankPerformance.attractedDeposits" />
                          </h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">7 102.6</h5>
                        </td>
                      </tr>
                      <tr>
                        <td width="30%" class="py-4">
                          <h5 class="font-600">13</h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">
                            <I18nVue t="SHAREHOLDERS_AND_INVESTORS.BankPerformance.depositsPopulation" />
                          </h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">1 126.4</h5>
                        </td>
                      </tr>
                      <tr>
                        <td width="30%" class="py-4">
                          <h5 class="font-600">14</h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">
                            <I18nVue t="SHAREHOLDERS_AND_INVESTORS.BankPerformance.issuedBank" />
                          </h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">140.0</h5>
                        </td>
                      </tr>
                      <tr>
                        <td width="30%" class="py-4">
                          <h5 class="font-600">15</h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">
                            <I18nVue t="SHAREHOLDERS_AND_INVESTORS.BankPerformance.bankBenefits" />
                          </h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">123.2</h5>
                        </td>
                      </tr>
                      <tr>
                        <td width="30%" class="py-4">
                          <h5 class="font-600">16</h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">
                            <I18nVue t="SHAREHOLDERS_AND_INVESTORS.BankPerformance.customerBase" />
                          </h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">1 959 130</h5>
                        </td>
                      </tr>
                      <tr>
                        <td width="30%" class="py-4">
                          <h5 class="font-600">16.1</h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">
                            <I18nVue t="SHAREHOLDERS_AND_INVESTORS.BankPerformance.individuals" />
                          </h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">1 909 565</h5>
                        </td>
                      </tr>
                      <tr>
                        <td width="30%" class="py-4">
                          <h5 class="font-600">17</h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">
                            <I18nVue t="SHAREHOLDERS_AND_INVESTORS.BankPerformance.numberBranches" />
                          </h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">27</h5>
                        </td>
                      </tr>
                      <tr>
                        <td width="30%" class="py-4">
                          <h5 class="font-600">18</h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">
                            <I18nVue t="SHAREHOLDERS_AND_INVESTORS.BankPerformance.numberMiniBanks" />
                          </h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">77</h5>
                        </td>
                      </tr>
                      </tbody>
                    </template>
                  </v-simple-table>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </div>

          <div class="app-collapse-item credit-widget rounded-lg">
            <v-expansion-panels accordion>
              <v-expansion-panel>
                <v-expansion-panel-header>
                  <h4 class="font-600">
                    <I18nVue t="SHAREHOLDERS_AND_INVESTORS.BankPerformance.title" />
                    01.10.2018
                  </h4>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  <v-simple-table class="app-table app-table__border">
                    <template v-slot:default>
                      <thead>
                      <tr>
                        <th class="text-left">
                          <h4 class="dark-text font-600">№</h4>
                        </th>
                        <th class="text-left">
                          <h4 class="dark-text font-600">
                            <I18nVue t="SHAREHOLDERS_AND_INVESTORS.BankPerformance.displayName" />
                          </h4>
                        </th>
                        <th class="text-left">
                          <h4 class="dark-text font-600">
                            <I18nVue t="SHAREHOLDERS_AND_INVESTORS.BankPerformance.milliardSum" />
                          </h4>
                        </th>
                      </tr>
                      </thead>
                      <tbody>
                      <tr>
                        <td width="30%" class="py-4">
                          <h5 class="font-600">1</h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">
                            <I18nVue t="SHAREHOLDERS_AND_INVESTORS.BankPerformance.totalCapital" />
                          </h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">
                            3 131.5
                          </h5>
                        </td>
                      </tr>
                      <tr>
                        <td width="30%" class="py-4">
                          <h5 class="font-600">1.1</h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">
                            <I18nVue t="SHAREHOLDERS_AND_INVESTORS.BankPerformance.AuthorizedCapital" />
                          </h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">
                            2 098.8
                          </h5>
                        </td>
                      </tr>
                      <tr>
                        <td width="30%" class="py-4">
                          <h5 class="font-600">2</h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">
                            <I18nVue t="SHAREHOLDERS_AND_INVESTORS.BankPerformance.totalAssets" />
                          </h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">
                            29.697.9
                          </h5>
                        </td>
                      </tr>
                      <tr>
                        <td width="30%" class="py-4">
                          <h5 class="font-600">3</h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">
                            <I18nVue t="SHAREHOLDERS_AND_INVESTORS.BankPerformance.fundsCorrespondent" />
                          </h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">
                            254.7
                          </h5>
                        </td>
                      </tr>
                      <tr>
                        <td width="30%" class="py-4">
                          <h5 class="font-600">4</h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">
                            <I18nVue t="SHAREHOLDERS_AND_INVESTORS.BankPerformance.cashHand" />
                          </h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">
                            245.8
                          </h5>
                        </td>
                      </tr>
                      <tr>
                        <td width="30%" class="py-4">
                          <h5 class="font-600">5</h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">
                            <I18nVue t="SHAREHOLDERS_AND_INVESTORS.BankPerformance.fundsMandatory" />
                          </h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">
                            455.7
                          </h5>
                        </td>
                      </tr>
                      <tr>
                        <td width="30%" class="py-4">
                          <h5 class="font-600">6</h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">
                            <I18nVue t="SHAREHOLDERS_AND_INVESTORS.BankPerformance.creditInvestments" />
                          </h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">
                            24 256.9
                          </h5>
                        </td>
                      </tr>
                      <tr>
                        <td width="30%" class="py-4">
                          <h5 class="font-600">7</h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">
                            <I18nVue t="SHAREHOLDERS_AND_INVESTORS.BankPerformance.loansForeign" />
                          </h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">
                            18 833.8
                          </h5>
                        </td>
                      </tr>
                      <tr>
                        <td width="30%" class="py-4">
                          <h5 class="font-600">8</h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">
                            <I18nVue t="SHAREHOLDERS_AND_INVESTORS.BankPerformance.mortgageLoans" />
                          </h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">
                            993.2
                          </h5>
                        </td>
                      </tr>
                      <tr>
                        <td width="30%" class="py-4">
                          <h5 class="font-600">9</h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">
                            <I18nVue t="SHAREHOLDERS_AND_INVESTORS.BankPerformance.consumerLoans" />
                          </h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">
                            237.2
                          </h5>
                        </td>
                      </tr>
                      <tr>
                        <td width="30%" class="py-4">
                          <h5 class="font-600">10</h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">
                            <I18nVue t="SHAREHOLDERS_AND_INVESTORS.BankPerformance.microCredits" />
                          </h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">
                            283.8
                          </h5>
                        </td>
                      </tr>
                      <tr>
                        <td width="30%" class="py-4">
                          <h5 class="font-600">11</h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">
                            <I18nVue t="SHAREHOLDERS_AND_INVESTORS.BankPerformance.investmentPortfolio" />
                          </h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">
                            396.5
                          </h5>
                        </td>
                      </tr>
                      <tr>
                        <td width="30%" class="py-4">
                          <h5 class="font-600">12</h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">
                            <I18nVue t="SHAREHOLDERS_AND_INVESTORS.BankPerformance.attractedDeposits" />
                          </h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">
                            7 924.2
                          </h5>
                        </td>
                      </tr>
                      <tr>
                        <td width="30%" class="py-4">
                          <h5 class="font-600">13</h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">
                            <I18nVue t="SHAREHOLDERS_AND_INVESTORS.BankPerformance.depositsPopulation" />
                          </h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">
                            1 108.6
                          </h5>
                        </td>
                      </tr>
                      <tr>
                        <td width="30%" class="py-4">
                          <h5 class="font-600">14</h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">
                            <I18nVue t="SHAREHOLDERS_AND_INVESTORS.BankPerformance.issuedBank" />
                          </h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">
                            140.2
                          </h5>
                        </td>
                      </tr>
                      <tr>
                        <td width="30%" class="py-4">
                          <h5 class="font-600">15</h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">
                            <I18nVue t="SHAREHOLDERS_AND_INVESTORS.BankPerformance.bankBenefits" />
                          </h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">
                            86.7
                          </h5>
                        </td>
                      </tr>
                      <tr>
                        <td width="30%" class="py-4">
                          <h5 class="font-600">16</h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">
                            <I18nVue t="SHAREHOLDERS_AND_INVESTORS.BankPerformance.customerBase" />
                          </h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">
                            2 047 230
                          </h5>
                        </td>
                      </tr>
                      <tr>
                        <td width="30%" class="py-4">
                          <h5 class="font-600">16.1</h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">
                            <I18nVue t="SHAREHOLDERS_AND_INVESTORS.BankPerformance.individuals" />
                          </h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">
                            1 999 914
                          </h5>
                        </td>
                      </tr>
                      <tr>
                        <td width="30%" class="py-4">
                          <h5 class="font-600">17</h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">
                            <I18nVue t="SHAREHOLDERS_AND_INVESTORS.BankPerformance.numberBranches" />
                          </h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">
                            26
                          </h5>
                        </td>
                      </tr>
                      <tr>
                        <td width="30%" class="py-4">
                          <h5 class="font-600">18</h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">
                            <I18nVue t="SHAREHOLDERS_AND_INVESTORS.BankPerformance.numberMiniBanks" />
                          </h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">
                            76
                          </h5>
                        </td>
                      </tr>
                      </tbody>
                    </template>
                  </v-simple-table>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </div>

          <div class="app-collapse-item credit-widget rounded-lg">
            <v-expansion-panels accordion>
              <v-expansion-panel>
                <v-expansion-panel-header>
                  <h4 class="font-600">
                    <I18nVue t="SHAREHOLDERS_AND_INVESTORS.BankPerformance.title" />
                    01.07.2018
                  </h4>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  <v-simple-table class="app-table app-table__border">
                    <template v-slot:default>
                      <thead>
                      <tr>
                        <th class="text-left">
                          <h4 class="dark-text font-600">№</h4>
                        </th>
                        <th class="text-left">
                          <h4 class="dark-text font-600">
                            <I18nVue t="SHAREHOLDERS_AND_INVESTORS.BankPerformance.displayName" />
                          </h4>
                        </th>
                        <th class="text-left">
                          <h4 class="dark-text font-600">
                            <I18nVue t="SHAREHOLDERS_AND_INVESTORS.BankPerformance.milliardSum" />
                          </h4>
                        </th>
                      </tr>
                      </thead>
                      <tbody>
                      <tr>
                        <td width="30%" class="py-4">
                          <h5 class="font-600">1</h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">
                            <I18nVue t="SHAREHOLDERS_AND_INVESTORS.BankPerformance.totalCapital" />
                          </h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">
                            3 119.4
                          </h5>
                        </td>
                      </tr>
                      <tr>
                        <td width="30%" class="py-4">
                          <h5 class="font-600">1.1</h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">
                            <I18nVue t="SHAREHOLDERS_AND_INVESTORS.BankPerformance.AuthorizedCapital" />
                          </h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">
                            2 098.8
                          </h5>
                        </td>
                      </tr>
                      <tr>
                        <td width="30%" class="py-4">
                          <h5 class="font-600">2</h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">
                            <I18nVue t="SHAREHOLDERS_AND_INVESTORS.BankPerformance.totalAssets" />
                          </h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">
                            25.976.8
                          </h5>
                        </td>
                      </tr>
                      <tr>
                        <td width="30%" class="py-4">
                          <h5 class="font-600">3</h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">
                            <I18nVue t="SHAREHOLDERS_AND_INVESTORS.BankPerformance.fundsCorrespondent" />
                          </h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">
                            747.5
                          </h5>
                        </td>
                      </tr>
                      <tr>
                        <td width="30%" class="py-4">
                          <h5 class="font-600">4</h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">
                            <I18nVue t="SHAREHOLDERS_AND_INVESTORS.BankPerformance.cashHand" />
                          </h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">
                            201.7
                          </h5>
                        </td>
                      </tr>
                      <tr>
                        <td width="30%" class="py-4">
                          <h5 class="font-600">5</h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">
                            <I18nVue t="SHAREHOLDERS_AND_INVESTORS.BankPerformance.fundsMandatory" />
                          </h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">
                            19.2
                          </h5>
                        </td>
                      </tr>
                      <tr>
                        <td width="30%" class="py-4">
                          <h5 class="font-600">6</h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">
                            <I18nVue t="SHAREHOLDERS_AND_INVESTORS.BankPerformance.creditInvestments" />
                          </h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">
                            19 959.1
                          </h5>
                        </td>
                      </tr>
                      <tr>
                        <td width="30%" class="py-4">
                          <h5 class="font-600">7</h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">
                            <I18nVue t="SHAREHOLDERS_AND_INVESTORS.BankPerformance.loansForeign" />
                          </h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">
                            15 140.2
                          </h5>
                        </td>
                      </tr>
                      <tr>
                        <td width="30%" class="py-4">
                          <h5 class="font-600">8</h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">
                            <I18nVue t="SHAREHOLDERS_AND_INVESTORS.BankPerformance.mortgageLoans" />
                          </h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">
                            869.3
                          </h5>
                        </td>
                      </tr>
                      <tr>
                        <td width="30%" class="py-4">
                          <h5 class="font-600">9</h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">
                            <I18nVue t="SHAREHOLDERS_AND_INVESTORS.BankPerformance.consumerLoans" />
                          </h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">
                            194.1
                          </h5>
                        </td>
                      </tr>
                      <tr>
                        <td width="30%" class="py-4">
                          <h5 class="font-600">10</h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">
                            <I18nVue t="SHAREHOLDERS_AND_INVESTORS.BankPerformance.microCredits" />
                          </h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">
                            262.6
                          </h5>
                        </td>
                      </tr>
                      <tr>
                        <td width="30%" class="py-4">
                          <h5 class="font-600">11</h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">
                            <I18nVue t="SHAREHOLDERS_AND_INVESTORS.BankPerformance.investmentPortfolio" />
                          </h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">
                            278.4
                          </h5>
                        </td>
                      </tr>
                      <tr>
                        <td width="30%" class="py-4">
                          <h5 class="font-600">12</h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">
                            <I18nVue t="SHAREHOLDERS_AND_INVESTORS.BankPerformance.attractedDeposits" />
                          </h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">
                            7 365.2
                          </h5>
                        </td>
                      </tr>
                      <tr>
                        <td width="30%" class="py-4">
                          <h5 class="font-600">13</h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">
                            <I18nVue t="SHAREHOLDERS_AND_INVESTORS.BankPerformance.depositsPopulation" />
                          </h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">
                            1 100.1
                          </h5>
                        </td>
                      </tr>
                      <tr>
                        <td width="30%" class="py-4">
                          <h5 class="font-600">14</h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">
                            <I18nVue t="SHAREHOLDERS_AND_INVESTORS.BankPerformance.issuedBank" />
                          </h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">
                            108.2
                          </h5>
                        </td>
                      </tr>
                      <tr>
                        <td width="30%" class="py-4">
                          <h5 class="font-600">15</h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">
                            <I18nVue t="SHAREHOLDERS_AND_INVESTORS.BankPerformance.bankBenefits" />
                          </h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">

                          </h5>
                        </td>
                      </tr>
                      <tr>
                        <td width="30%" class="py-4">
                          <h5 class="font-600">16</h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">
                            <I18nVue t="SHAREHOLDERS_AND_INVESTORS.BankPerformance.customerBase" />
                          </h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">
                            2 033 431
                          </h5>
                        </td>
                      </tr>
                      <tr>
                        <td width="30%" class="py-4">
                          <h5 class="font-600">16.1</h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">
                            <I18nVue t="SHAREHOLDERS_AND_INVESTORS.BankPerformance.individuals" />
                          </h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">
                            1 988 346
                          </h5>
                        </td>
                      </tr>
                      <tr>
                        <td width="30%" class="py-4">
                          <h5 class="font-600">17</h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">
                            <I18nVue t="SHAREHOLDERS_AND_INVESTORS.BankPerformance.numberBranches" />
                          </h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">
                            26
                          </h5>
                        </td>
                      </tr>
                      <tr>
                        <td width="30%" class="py-4">
                          <h5 class="font-600">18</h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">
                            <I18nVue t="SHAREHOLDERS_AND_INVESTORS.BankPerformance.numberMiniBanks" />
                          </h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">
                            77
                          </h5>
                        </td>
                      </tr>
                      </tbody>
                    </template>
                  </v-simple-table>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </div>

          <div class="app-collapse-item credit-widget rounded-lg">
            <v-expansion-panels accordion>
              <v-expansion-panel>
                <v-expansion-panel-header>
                  <h4 class="font-600">
                    <I18nVue t="SHAREHOLDERS_AND_INVESTORS.BankPerformance.title" />
                    01.01.2018
                  </h4>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  <v-simple-table class="app-table app-table__border">
                    <template v-slot:default>
                      <thead>
                      <tr>
                        <th class="text-left">
                          <h4 class="dark-text font-600">№</h4>
                        </th>
                        <th class="text-left">
                          <h4 class="dark-text font-600">
                            <I18nVue t="SHAREHOLDERS_AND_INVESTORS.BankPerformance.displayName" />
                          </h4>
                        </th>
                        <th class="text-left">
                          <h4 class="dark-text font-600">
                            <I18nVue t="SHAREHOLDERS_AND_INVESTORS.BankPerformance.milliardSum" />
                          </h4>
                        </th>
                      </tr>
                      </thead>
                      <tbody>
                      <tr>
                        <td width="30%" class="py-4">
                          <h5 class="font-600">1</h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">
                            <I18nVue t="SHAREHOLDERS_AND_INVESTORS.BankPerformance.totalCapital" />
                          </h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">
                            3 083.2
                          </h5>
                        </td>
                      </tr>
                      <tr>
                        <td width="30%" class="py-4">
                          <h5 class="font-600">1.1</h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">
                            <I18nVue t="SHAREHOLDERS_AND_INVESTORS.BankPerformance.AuthorizedCapital" />
                          </h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">
                            2 098.9
                          </h5>
                        </td>
                      </tr>
                      <tr>
                        <td width="30%" class="py-4">
                          <h5 class="font-600">2</h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">
                            <I18nVue t="SHAREHOLDERS_AND_INVESTORS.BankPerformance.totalAssets" />
                          </h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">
                            24.276.4
                          </h5>
                        </td>
                      </tr>
                      <tr>
                        <td width="30%" class="py-4">
                          <h5 class="font-600">3</h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">
                            <I18nVue t="SHAREHOLDERS_AND_INVESTORS.BankPerformance.fundsCorrespondent" />
                          </h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">
                            1 482.1
                          </h5>
                        </td>
                      </tr>
                      <tr>
                        <td width="30%" class="py-4">
                          <h5 class="font-600">4</h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">
                            <I18nVue t="SHAREHOLDERS_AND_INVESTORS.BankPerformance.cashHand" />
                          </h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">
                            226.5
                          </h5>
                        </td>
                      </tr>
                      <tr>
                        <td width="30%" class="py-4">
                          <h5 class="font-600">5</h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">
                            <I18nVue t="SHAREHOLDERS_AND_INVESTORS.BankPerformance.fundsMandatory" />
                          </h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">
                            522.3
                          </h5>
                        </td>
                      </tr>
                      <tr>
                        <td width="30%" class="py-4">
                          <h5 class="font-600">6</h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">
                            <I18nVue t="SHAREHOLDERS_AND_INVESTORS.BankPerformance.creditInvestments" />
                          </h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">
                            18 288.3
                          </h5>
                        </td>
                      </tr>
                      <tr>
                        <td width="30%" class="py-4">
                          <h5 class="font-600">7</h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">
                            <I18nVue t="SHAREHOLDERS_AND_INVESTORS.BankPerformance.loansForeign" />
                          </h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">
                            14 429.04
                          </h5>
                        </td>
                      </tr>
                      <tr>
                        <td width="30%" class="py-4">
                          <h5 class="font-600">8</h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">
                            <I18nVue t="SHAREHOLDERS_AND_INVESTORS.BankPerformance.mortgageLoans" />
                          </h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">
                            782.03
                          </h5>
                        </td>
                      </tr>
                      <tr>
                        <td width="30%" class="py-4">
                          <h5 class="font-600">9</h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">
                            <I18nVue t="SHAREHOLDERS_AND_INVESTORS.BankPerformance.consumerLoans" />
                          </h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">
                            23.53
                          </h5>
                        </td>
                      </tr>
                      <tr>
                        <td width="30%" class="py-4">
                          <h5 class="font-600">10</h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">
                            <I18nVue t="SHAREHOLDERS_AND_INVESTORS.BankPerformance.microCredits" />
                          </h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">
                            139.49
                          </h5>
                        </td>
                      </tr>
                      <tr>
                        <td width="30%" class="py-4">
                          <h5 class="font-600">11</h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">
                            <I18nVue t="SHAREHOLDERS_AND_INVESTORS.BankPerformance.investmentPortfolio" />
                          </h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">
                            345.48
                          </h5>
                        </td>
                      </tr>
                      <tr>
                        <td width="30%" class="py-4">
                          <h5 class="font-600">12</h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">
                            <I18nVue t="SHAREHOLDERS_AND_INVESTORS.BankPerformance.attractedDeposits" />
                          </h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">
                            8 692.28
                          </h5>
                        </td>
                      </tr>
                      <tr>
                        <td width="30%" class="py-4">
                          <h5 class="font-600">13</h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">
                            <I18nVue t="SHAREHOLDERS_AND_INVESTORS.BankPerformance.depositsPopulation" />
                          </h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">
                            1 049.53
                          </h5>
                        </td>
                      </tr>
                      <tr>
                        <td width="30%" class="py-4">
                          <h5 class="font-600">14</h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">
                            <I18nVue t="SHAREHOLDERS_AND_INVESTORS.BankPerformance.issuedBank" />
                          </h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">
                            156.84
                          </h5>
                        </td>
                      </tr>
                      <tr>
                        <td width="30%" class="py-4">
                          <h5 class="font-600">15</h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">
                            <I18nVue t="SHAREHOLDERS_AND_INVESTORS.BankPerformance.bankBenefits" />
                          </h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">
                            51.01
                          </h5>
                        </td>
                      </tr>
                      <tr>
                        <td width="30%" class="py-4">
                          <h5 class="font-600">16</h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">
                            <I18nVue t="SHAREHOLDERS_AND_INVESTORS.BankPerformance.customerBase" />
                          </h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">
                            1 966 348
                          </h5>
                        </td>
                      </tr>
                      <tr>
                        <td width="30%" class="py-4">
                          <h5 class="font-600">16.1</h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">
                            <I18nVue t="SHAREHOLDERS_AND_INVESTORS.BankPerformance.individuals" />
                          </h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">
                            1 952 965
                          </h5>
                        </td>
                      </tr>
                      <tr>
                        <td width="30%" class="py-4">
                          <h5 class="font-600">17</h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">
                            <I18nVue t="SHAREHOLDERS_AND_INVESTORS.BankPerformance.numberBranches" />
                          </h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">
                            26
                          </h5>
                        </td>
                      </tr>
                      <tr>
                        <td width="30%" class="py-4">
                          <h5 class="font-600">18</h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">
                            <I18nVue t="SHAREHOLDERS_AND_INVESTORS.BankPerformance.numberMiniBanks" />
                          </h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">
                            83
                          </h5>
                        </td>
                      </tr>
                      </tbody>
                    </template>
                  </v-simple-table>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </div>

          <div class="app-collapse-item credit-widget rounded-lg">
            <v-expansion-panels accordion>
              <v-expansion-panel>
                <v-expansion-panel-header>
                  <h4 class="font-600">
                    <I18nVue t="SHAREHOLDERS_AND_INVESTORS.BankPerformance.title" />
                    01.10.2017
                  </h4>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  <v-simple-table class="app-table app-table__border">
                    <template v-slot:default>
                      <thead>
                      <tr>
                        <th class="text-left">
                          <h4 class="dark-text font-600">№</h4>
                        </th>
                        <th class="text-left">
                          <h4 class="dark-text font-600">
                            <I18nVue t="SHAREHOLDERS_AND_INVESTORS.BankPerformance.displayName" />
                          </h4>
                        </th>
                        <th class="text-left">
                          <h4 class="dark-text font-600">
                            <I18nVue t="SHAREHOLDERS_AND_INVESTORS.BankPerformance.milliardSum" />
                          </h4>
                        </th>
                      </tr>
                      </thead>
                      <tbody>
                      <tr>
                        <td width="30%" class="py-4">
                          <h5 class="font-600">1</h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">
                            <I18nVue t="SHAREHOLDERS_AND_INVESTORS.BankPerformance.totalCapital" />
                          </h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">
                            1 752.3
                          </h5>
                        </td>
                      </tr>
                      <tr>
                        <td width="30%" class="py-4">
                          <h5 class="font-600">1.1</h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">
                            <I18nVue t="SHAREHOLDERS_AND_INVESTORS.BankPerformance.AuthorizedCapital" />
                          </h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">
                            720.7
                          </h5>
                        </td>
                      </tr>
                      <tr>
                        <td width="30%" class="py-4">
                          <h5 class="font-600">2</h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">
                            <I18nVue t="SHAREHOLDERS_AND_INVESTORS.BankPerformance.totalAssets" />
                          </h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">
                            22 661.5
                          </h5>
                        </td>
                      </tr>
                      <tr>
                        <td width="30%" class="py-4">
                          <h5 class="font-600">3</h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">
                            <I18nVue t="SHAREHOLDERS_AND_INVESTORS.BankPerformance.fundsCorrespondent" />
                          </h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">
                            1 212.5
                          </h5>
                        </td>
                      </tr>
                      <tr>
                        <td width="30%" class="py-4">
                          <h5 class="font-600">4</h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">
                            <I18nVue t="SHAREHOLDERS_AND_INVESTORS.BankPerformance.cashHand" />
                          </h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">
                            242.7
                          </h5>
                        </td>
                      </tr>
                      <tr>
                        <td width="30%" class="py-4">
                          <h5 class="font-600">5</h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">
                            <I18nVue t="SHAREHOLDERS_AND_INVESTORS.BankPerformance.fundsMandatory" />
                          </h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">
                            644.7
                          </h5>
                        </td>
                      </tr>
                      <tr>
                        <td width="30%" class="py-4">
                          <h5 class="font-600">6</h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">
                            <I18nVue t="SHAREHOLDERS_AND_INVESTORS.BankPerformance.creditInvestments" />
                          </h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">
                            13 787.4
                          </h5>
                        </td>
                      </tr>
                      <tr>
                        <td width="30%" class="py-4">
                          <h5 class="font-600">7</h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">
                            <I18nVue t="SHAREHOLDERS_AND_INVESTORS.BankPerformance.loansForeign" />
                          </h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">
                            10 118.8
                          </h5>
                        </td>
                      </tr>
                      <tr>
                        <td width="30%" class="py-4">
                          <h5 class="font-600">8</h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">
                            <I18nVue t="SHAREHOLDERS_AND_INVESTORS.BankPerformance.mortgageLoans" />
                          </h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">
                            719.8
                          </h5>
                        </td>
                      </tr>
                      <tr>
                        <td width="30%" class="py-4">
                          <h5 class="font-600">9</h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">
                            <I18nVue t="SHAREHOLDERS_AND_INVESTORS.BankPerformance.consumerLoans" />
                          </h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">
                            209.9
                          </h5>
                        </td>
                      </tr>
                      <tr>
                        <td width="30%" class="py-4">
                          <h5 class="font-600">10</h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">
                            <I18nVue t="SHAREHOLDERS_AND_INVESTORS.BankPerformance.microCredits" />
                          </h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">
                            115.6
                          </h5>
                        </td>
                      </tr>
                      <tr>
                        <td width="30%" class="py-4">
                          <h5 class="font-600">11</h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">
                            <I18nVue t="SHAREHOLDERS_AND_INVESTORS.BankPerformance.investmentPortfolio" />
                          </h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">
                            464.4
                          </h5>
                        </td>
                      </tr>
                      <tr>
                        <td width="30%" class="py-4">
                          <h5 class="font-600">12</h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">
                            <I18nVue t="SHAREHOLDERS_AND_INVESTORS.BankPerformance.attractedDeposits" />
                          </h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">
                            8 922.3
                          </h5>
                        </td>
                      </tr>
                      <tr>
                        <td width="30%" class="py-4">
                          <h5 class="font-600">13</h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">
                            <I18nVue t="SHAREHOLDERS_AND_INVESTORS.BankPerformance.depositsPopulation" />
                          </h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">
                            1 086.9
                          </h5>
                        </td>
                      </tr>
                      <tr>
                        <td width="30%" class="py-4">
                          <h5 class="font-600">14</h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">
                            <I18nVue t="SHAREHOLDERS_AND_INVESTORS.BankPerformance.issuedBank" />
                          </h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">
                            170.2
                          </h5>
                        </td>
                      </tr>
                      <tr>
                        <td width="30%" class="py-4">
                          <h5 class="font-600">15</h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">
                            <I18nVue t="SHAREHOLDERS_AND_INVESTORS.BankPerformance.bankBenefits" />
                          </h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">
                            104.5
                          </h5>
                        </td>
                      </tr>
                      <tr>
                        <td width="30%" class="py-4">
                          <h5 class="font-600">16</h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">
                            <I18nVue t="SHAREHOLDERS_AND_INVESTORS.BankPerformance.customerBase" />
                          </h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">
                            1 958 163
                          </h5>
                        </td>
                      </tr>
                      <tr>
                        <td width="30%" class="py-4">
                          <h5 class="font-600">16.1</h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">
                            <I18nVue t="SHAREHOLDERS_AND_INVESTORS.BankPerformance.individuals" />
                          </h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">
                            1 914 691
                          </h5>
                        </td>
                      </tr>
                      <tr>
                        <td width="30%" class="py-4">
                          <h5 class="font-600">17</h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">
                            <I18nVue t="SHAREHOLDERS_AND_INVESTORS.BankPerformance.numberBranches" />
                          </h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">
                            26
                          </h5>
                        </td>
                      </tr>
                      <tr>
                        <td width="30%" class="py-4">
                          <h5 class="font-600">18</h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">
                            <I18nVue t="SHAREHOLDERS_AND_INVESTORS.BankPerformance.numberMiniBanks" />
                          </h5>
                        </td>
                        <td width="35%" class="py-4">
                          <h5 class="font-600">
                            83
                          </h5>
                        </td>
                      </tr>
                      </tbody>
                    </template>
                  </v-simple-table>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </div>

        </div>
      </div>
    </v-container>
  </div>
</template>

<script>
import I18nVue from "@/I18nVue";

export default {
  name: "index",
  components: { I18nVue }
};
</script>

<style></style>
